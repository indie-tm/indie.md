#!/usr/bin/env node
// Submit every URL in the built sitemap -- plus the Markdown twins and the
// LLM discovery surfaces (llms.txt, llms-full.txt, llms.jsonl, rss.xml) --
// to IndexNow after a successful deploy.
//
// IndexNow is idempotent and accepts up to 10,000 URLs per submission, so a
// full resubmit on every deploy is both simple and safe. Search engines use
// the key file hosted at `/<KEY>.txt` on the site to verify ownership.
// Bing and Yandex honour IndexNow today; every other engine that joins the
// protocol will pick up the same feed automatically.

import { existsSync, readFileSync } from "node:fs";

const KEY = "534db879a6a84da8bb9dfd6c3c181213";
const HOST = "indie.md";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const SITEMAP_PATH = "dist/sitemap-0.xml";

// Top-level LLM + syndication endpoints. These are not in the sitemap (which
// scopes to HTML pages) but we want crawlers to revalidate them on every deploy
// so agents see fresh content without waiting for the next scheduled crawl.
const DISCOVERY_PATHS = [
  "/llms.txt",
  "/llms-full.txt",
  "/llms.jsonl",
  "/rss.xml",
];

// Content-type directories whose canonical HTML URLs also have a Markdown
// twin at `<url-without-trailing-slash>.md`. Keep in sync with the
// `[slug].md.ts` endpoints under src/pages.
const MARKDOWN_TWIN_PREFIXES = ["/journeys/", "/events/", "/people/", "/advice/"];

function readSitemapUrls(xml) {
  const out = [];
  const entry = /<url>([\s\S]*?)<\/url>/g;
  let m = entry.exec(xml);
  while (m !== null) {
    const loc = m[1].match(/<loc>([^<]+)<\/loc>/);
    if (loc) out.push(loc[1]);
    m = entry.exec(xml);
  }
  return out;
}

function markdownTwinFor(htmlUrl) {
  // Detail pages look like `https://indie.md/<collection>/<slug>/`. Strip the
  // trailing slash and append `.md` to get the mirror Astro emits.
  const matchesPrefix = MARKDOWN_TWIN_PREFIXES.some(
    (prefix) =>
      htmlUrl.startsWith(`${ORIGIN}${prefix}`) &&
      htmlUrl !== `${ORIGIN}${prefix}`,
  );
  if (!matchesPrefix) return null;
  return `${htmlUrl.replace(/\/+$/, "")}.md`;
}

async function main() {
  if (!existsSync(SITEMAP_PATH)) {
    throw new Error(`Missing ${SITEMAP_PATH}. Run \`npm run build\` first.`);
  }

  const htmlUrls = readSitemapUrls(readFileSync(SITEMAP_PATH, "utf-8"));
  const markdownUrls = htmlUrls
    .map(markdownTwinFor)
    .filter((u) => u !== null);
  const discoveryUrls = DISCOVERY_PATHS.map((path) => `${ORIGIN}${path}`);

  const urlList = [...htmlUrls, ...markdownUrls, ...discoveryUrls];

  if (urlList.length === 0) {
    console.log("IndexNow: sitemap was empty, skipping submission.");
    return;
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`IndexNow rejected submission: ${res.status} ${text}`);
  }

  console.log(
    `IndexNow: submitted ${urlList.length} URL(s) (${htmlUrls.length} HTML, ${markdownUrls.length} Markdown, ${discoveryUrls.length} discovery).`,
  );
}

await main();
