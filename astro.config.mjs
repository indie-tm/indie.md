import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import { globSync } from "tinyglobby";
import rehypeImageDimensions from "./src/plugins/rehype-image-dimensions.ts";
import remarkExtractAdvice from "./src/plugins/remark-extract-advice.ts";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const FRONTMATTER_DATE = /^date:\s*(.+?)\s*$/m;

function readDateMap(collection) {
  const files = globSync(`src/content/${collection}/**/*.md`, { cwd: ROOT });
  const dates = new Map();
  for (const rel of files) {
    const raw = readFileSync(`${ROOT}${rel}`, "utf-8");
    const match = raw.match(FRONTMATTER_DATE);
    if (!match) continue;
    const parsed = new Date(match[1].replace(/^["']|["']$/g, ""));
    if (Number.isNaN(parsed.getTime())) continue;
    dates.set(rel.split("/").pop().replace(/\.md$/, ""), parsed);
  }
  return dates;
}

const journeyDates = readDateMap("journeys");
const eventDates = readDateMap("events");

const adviceIndex = (() => {
  try {
    const raw = readFileSync(`${ROOT}src/generated/advice-index.json`, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
})();

function lastmodForUrl(url) {
  const match = url.match(/^https:\/\/indie\.md\/(journeys|events|advice|people)\/(.+?)\/?$/);
  if (!match) return undefined;
  const [, kind, rest] = match;
  if (kind === "journeys") return journeyDates.get(rest)?.toISOString();
  if (kind === "events") return eventDates.get(rest)?.toISOString();
  if (kind === "advice") {
    const entry = adviceIndex.find((a) => a.slug === rest);
    if (!entry) return undefined;
    if (entry.eventSlug) return eventDates.get(entry.eventSlug)?.toISOString();
    if (entry.journeySlug) return journeyDates.get(entry.journeySlug)?.toISOString();
  }
  return undefined;
}

export default defineConfig({
  site: "https://indie.md",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      serialize(item) {
        const lastmod = lastmodForUrl(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  output: "static",
  build: {
    format: "directory",
  },
  markdown: {
    remarkPlugins: [remarkDirective, remarkExtractAdvice],
    rehypePlugins: [rehypeImageDimensions],
  },
});
