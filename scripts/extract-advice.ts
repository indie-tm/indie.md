/**
 * Pre-build script: extracts :::advice directives from all journey and event
 * markdown files and writes src/generated/advice-index.json.
 *
 * Run before `astro build` to ensure the advice index is up to date.
 */

import fs from "node:fs";
import path from "node:path";

interface AdviceEntry {
  slug: string;
  category: string;
  title: string;
  content: string;
  journeySlug: string | null;
  eventSlug: string | null;
  personSlug: string;
}

const CONTENT_DIR = path.resolve("src/content");
const OUT_PATH = path.resolve("src/generated/advice-index.json");

const DIRECTIVE_RE = /:::advice\{([^}]+)\}\s*\n([\s\S]*?):::/g;
const ATTR_RE = /(\w+)="([^"]+)"/g;

function parseDirectiveAttrs(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  let match: RegExpExecArray | null;
  ATTR_RE.lastIndex = 0;
  while ((match = ATTR_RE.exec(raw)) !== null) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}

function extractFromFile(
  filePath: string,
  sourceType: "journey" | "event",
): AdviceEntry[] {
  const raw = fs.readFileSync(filePath, "utf-8");
  const slug = path.basename(filePath, ".md");

  // Parse frontmatter person field (for journeys)
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  let frontmatterPerson = "unknown";
  if (frontmatterMatch) {
    const personMatch = frontmatterMatch[1].match(/^person:\s*"?(\S+?)"?\s*$/m);
    if (personMatch) {
      frontmatterPerson = personMatch[1];
    }
  }

  const entries: AdviceEntry[] = [];
  let match: RegExpExecArray | null;
  DIRECTIVE_RE.lastIndex = 0;

  while ((match = DIRECTIVE_RE.exec(raw)) !== null) {
    const attrs = parseDirectiveAttrs(match[1]);
    const content = match[2].trim();

    if (!attrs.slug) continue;

    const resolvedPerson = attrs.person || frontmatterPerson;

    entries.push({
      slug: attrs.slug,
      category: attrs.category || "",
      title: attrs.title || "",
      content,
      journeySlug: sourceType === "journey" ? slug : null,
      eventSlug: sourceType === "event" ? slug : null,
      personSlug: resolvedPerson,
    });
  }

  return entries;
}

function scanDir(dir: string, sourceType: "journey" | "event"): AdviceEntry[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .flatMap((f) => extractFromFile(path.join(dir, f), sourceType));
}

const allAdvice = [
  ...scanDir(path.join(CONTENT_DIR, "journeys"), "journey"),
  ...scanDir(path.join(CONTENT_DIR, "events"), "event"),
];

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, `${JSON.stringify(allAdvice, null, 2)}\n`);

console.log(`[extract-advice] ${allAdvice.length} advice entries extracted`);
