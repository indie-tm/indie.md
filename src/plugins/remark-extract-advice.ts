import fs from "node:fs";
import path from "node:path";
import type { Root, RootContent } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { AdviceEntry } from "../lib/advice";

const RESERVED_SLUGS = new Set(["seo", "distribution", "product", "business", "mindset"]);

/**
 * Module-level map of source file -> its advice entries. Remark processes each
 * markdown file independently, and incremental builds only re-process changed
 * files, so the on-disk index must be merged rather than overwritten: entries
 * from files this build never saw have to survive the write.
 */
const adviceBySource = new Map<string, AdviceEntry[]>();

function sourceKey(journeySlug: string | null, eventSlug: string | null): string {
  return journeySlug === null ? `event:${eventSlug ?? "unknown"}` : `journey:${journeySlug}`;
}

function writeIndex() {
  const outDir = path.resolve("src/generated");
  fs.mkdirSync(outDir, { recursive: true });
  const indexPath = path.join(outDir, "advice-index.json");
  const previous: AdviceEntry[] = fs.existsSync(indexPath)
    ? JSON.parse(fs.readFileSync(indexPath, "utf8"))
    : [];
  const untouched = previous.filter(
    (entry) => !adviceBySource.has(sourceKey(entry.journeySlug, entry.eventSlug)),
  );
  const merged = [...untouched, ...[...adviceBySource.values()].flat()];
  const sorted = merged.sort((a, b) => a.slug.localeCompare(b.slug));
  fs.writeFileSync(indexPath, `${JSON.stringify(sorted, null, 2)}\n`);
}

function extractTextContent(node: ContainerDirective): string {
  const parts: string[] = [];

  for (const child of node.children) {
    if (child.type === "paragraph") {
      for (const inline of child.children) {
        if (inline.type === "text") {
          parts.push(inline.value);
        } else if (inline.type === "strong" || inline.type === "emphasis") {
          // Recurse one level into inline formatting
          for (const nested of inline.children) {
            if (nested.type === "text") {
              parts.push(nested.value);
            }
          }
        }
      }
    }
  }

  return parts.join(" ").trim();
}

/**
 * Build an HTML callout div that replaces the :::advice directive in the
 * rendered markdown output.
 */
function buildCalloutHtml(attrs: {
  slug: string;
  category: string;
  title: string;
  content: string;
}): RootContent {
  return {
    type: "html",
    value: [
      `<div class="advice-callout" data-category="${attrs.category}">`,
      `  <div class="advice-callout-header">`,
      `    <span class="advice-callout-category">${attrs.category}</span>`,
      `    <strong>${attrs.title}</strong>`,
      `  </div>`,
      `  <div class="advice-callout-body">`,
      `    <p>${attrs.content}</p>`,
      `  </div>`,
      `  <a class="advice-callout-link" href="/advice/${attrs.slug}">Read full advice &rarr;</a>`,
      `</div>`,
    ].join("\n"),
  };
}

const remarkExtractAdvice: Plugin<[], Root> = () => (tree: Root, file) => {
  // Derive source slug from the file name (e.g. "vlad-seo.md" -> "vlad-seo")
  const fileName = file.history[0]
    ? path.basename(file.history[0], path.extname(file.history[0]))
    : undefined;

  // Only process files that live under content/journeys or content/events
  const filePath = file.history[0] ?? "";
  const isJourney = filePath.includes("content/journeys");
  const isEvent = filePath.includes("content/events");
  if (!isJourney && !isEvent) return;

  const sourceSlug = fileName ?? "unknown";

  // Extract personSlug from frontmatter (set by gray-matter / Astro)
  const frontmatter = (file.data as Record<string, unknown>)?.astro
    ? ((file.data as Record<string, Record<string, unknown>>).astro.frontmatter as Record<
        string,
        unknown
      >)
    : (file.data as Record<string, unknown>);
  const personSlug = typeof frontmatter?.person === "string" ? frontmatter.person : "unknown";

  // Rebuilt from scratch on every (re-)process of this file, so edits and
  // deletions of directives replace the file's previous entries instead of
  // accumulating alongside them.
  const fileEntries: AdviceEntry[] = [];

  visit(tree, "containerDirective", (node, index, parent) => {
    const directive = node as unknown as ContainerDirective;
    if (directive.name !== "advice") return;

    const attrs = directive.attributes ?? {};
    const slug = attrs.slug ?? "";
    const category = attrs.category ?? "";
    const title = attrs.title ?? "";
    const content = extractTextContent(directive);

    if (!slug) {
      console.warn(`[remark-extract-advice] Missing slug in advice directive (${filePath})`);
      return;
    }

    if (RESERVED_SLUGS.has(slug)) {
      throw new Error(
        `[remark-extract-advice] Advice slug "${slug}" collides with a reserved category slug (${filePath})`,
      );
    }

    // For events, use the person attribute from the directive.
    // For journeys, fall back to frontmatter person.
    const directivePerson = attrs.person ?? "";
    const resolvedPerson = directivePerson || personSlug;

    const entry: AdviceEntry = {
      slug,
      category,
      title,
      content,
      journeySlug: isJourney ? sourceSlug : null,
      eventSlug: isEvent ? sourceSlug : null,
      personSlug: resolvedPerson,
    };

    fileEntries.push(entry);

    // Replace the directive node with a styled callout div
    if (parent && typeof index === "number") {
      const callout = buildCalloutHtml({ slug, category, title, content });
      parent.children.splice(index, 1, callout as (typeof parent.children)[0]);
    }
  });

  adviceBySource.set(isJourney ? `journey:${sourceSlug}` : `event:${sourceSlug}`, fileEntries);
  writeIndex();
};

export default remarkExtractAdvice;
