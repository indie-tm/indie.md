/**
 * Take a screenshot of a website.
 *
 * Usage:
 *   node scripts/screenshot-products.mjs <url> <output-name>
 *   node scripts/screenshot-products.mjs https://sisif.ai sisif-ai
 *
 * Without arguments, captures all event product screenshots.
 */

import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/screenshots");

const ALL_PRODUCTS = [
  { slug: "sisif-ai", url: "https://sisif.ai" },
  { slug: "singlefax", url: "https://singlefax.com" },
  { slug: "blahphone", url: "https://blahphone.com" },
  { slug: "calmcompanies", url: "https://calmcompanies.club" },
  { slug: "ogpilot", url: "https://ogpilot.com" },
  { slug: "ocrskill", url: "https://ocrskill.com" },
  { slug: "cozmoslabs", url: "https://www.cozmoslabs.com" },
  { slug: "event-newsletter", url: "https://event-newsletter.com" },
];

async function capture(url, slug) {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  console.log(`Capturing ${url}...`);
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

    // Dismiss cookie banners if present
    try {
      const cookieBtn = page.locator(
        'button:has-text("Accept"), button:has-text("Got it"), button:has-text("OK"), button:has-text("Agree"), [id*="cookie"] button',
      );
      if (await cookieBtn.first().isVisible({ timeout: 2000 })) {
        await cookieBtn.first().click();
        await page.waitForTimeout(500);
      }
    } catch {
      // No cookie banner
    }

    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, `${slug}.png`);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log(`  Saved ${outPath}`);
  } catch (err) {
    console.error(`  Failed: ${err.message}`);
  }

  await browser.close();
}

const [urlArg, slugArg] = process.argv.slice(2);

if (urlArg && slugArg) {
  await capture(urlArg, slugArg);
} else if (urlArg) {
  console.error("Usage: node scripts/screenshot-products.mjs <url> <slug>");
  console.error("  Or run without arguments to capture all products.");
  process.exit(1);
} else {
  for (const product of ALL_PRODUCTS) {
    await capture(product.url, product.slug);
  }
}

console.log("Done.");
