import fs from "node:fs";
import path from "node:path";
import type { Root, RootContent } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import type { AdviceEntry } from "../lib/advice";

const RESERVED_SLUGS = new Set(["seo", "distribution", "product", "business", "mindset"]);

/**
 * Module-level accumulator. Remark processes each markdown file independently,
 * so we collect advice entries across all files here and flush them to disk
 * once processing is complete.
 */
const collectedAdvice: AdviceEntry[] = [];

function writeIndex() {
  const outDir = path.resolve("src/generated");
  fs.mkdirSync(outDir, { recursive: true });
  const sorted = [...collectedAdvice].sort((a, b) => a.slug.localeCompare(b.slug));
  fs.writeFileSync(path.join(outDir, "advice-index.json"), `${JSON.stringify(sorted, null, 2)}\n`);
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

    // Avoid duplicates if the same file is processed more than once (HMR)
    const exists = collectedAdvice.some(
      (a) => a.slug === slug && (a.journeySlug === sourceSlug || a.eventSlug === sourceSlug),
    );
    if (!exists) {
      collectedAdvice.push(entry);
    }

    // Replace the directive node with a styled callout div
    if (parent && typeof index === "number") {
      const callout = buildCalloutHtml({ slug, category, title, content });
      parent.children.splice(index, 1, callout as (typeof parent.children)[0]);
    }
  });

  writeIndex();
};

export default remarkExtractAdvice;
