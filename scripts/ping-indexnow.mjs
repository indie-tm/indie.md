#!/usr/bin/env node
// Submit every URL in the built sitemap to IndexNow after a successful deploy.
//
// IndexNow is idempotent and accepts up to 10,000 URLs per submission, so a
// full resubmit on every deploy is both simple and safe. Search engines use
// the key file hosted at `/<KEY>.txt` on the site to verify ownership.

import { existsSync, readFileSync } from "node:fs";

const KEY = "534db879a6a84da8bb9dfd6c3c181213";
const HOST = "indie.md";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = "dist/sitemap-0.xml";

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

async function main() {
  if (!existsSync(SITEMAP_PATH)) {
    throw new Error(`Missing ${SITEMAP_PATH}. Run \`npm run build\` first.`);
  }

  const urlList = readSitemapUrls(readFileSync(SITEMAP_PATH, "utf-8"));
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

  console.log(`IndexNow: submitted ${urlList.length} URL(s).`);
}

await main();
