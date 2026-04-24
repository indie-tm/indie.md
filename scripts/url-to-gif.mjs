/**
 * Record a URL as an animated GIF.
 *
 * Default recipe: load the page, dismiss cookie banners, smoothly scroll from
 * the hero to the bottom of the page over `duration` ms, then stop. The result
 * is encoded as a high-quality GIF via ffmpeg's two-pass palette workflow.
 *
 * Usage:
 *   node scripts/url-to-gif.mjs <url> <slug>
 *   node scripts/url-to-gif.mjs <url> <slug> --duration 6000 --fps 15 --width 800
 *
 * Flags:
 *   --duration <ms>   Total animation length (default 5000)
 *   --fps <n>         Output GIF frame rate (default 15)
 *   --width <px>      Output GIF width in px; height is auto (default 960)
 *   --hold <ms>       Hold the hero before scrolling starts (default 600)
 *   --viewport-h <px> Browser viewport height (default 800)
 *   --viewport-w <px> Browser viewport width (default 1280)
 *   --lossy <0-200>   gifsicle lossy compression level (default 80)
 *   --no-optimize     Skip the gifsicle optimization pass
 *   --keep-video      Keep the intermediate .webm for debugging
 *
 * Requires: ffmpeg on PATH (brew install ffmpeg).
 * Optional: gifsicle on PATH for 40-60% smaller output (brew install gifsicle).
 */

import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { dismissCookieBanner } from "./lib/browser-helpers.mjs";

const run = promisify(execFile);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../public/screenshots");
const TMP_DIR = path.resolve(__dirname, "../.tmp/url-to-gif");

const DEFAULTS = {
  duration: 5000,
  fps: 15,
  width: 960,
  hold: 600,
  viewportWidth: 1280,
  viewportHeight: 800,
  keepVideo: false,
  lossy: 80,
  skipOptimize: false,
};

function parseArgs(argv) {
  const positional = [];
  const flags = { ...DEFAULTS };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) {
      positional.push(arg);
      continue;
    }
    const key = arg.slice(2);
    if (key === "keep-video") {
      flags.keepVideo = true;
      continue;
    }
    if (key === "no-optimize") {
      flags.skipOptimize = true;
      continue;
    }
    const value = argv[i + 1];
    i += 1;
    if (value === undefined) {
      throw new Error(`Missing value for --${key}`);
    }
    const map = {
      duration: "duration",
      fps: "fps",
      width: "width",
      hold: "hold",
      "viewport-w": "viewportWidth",
      "viewport-h": "viewportHeight",
      lossy: "lossy",
    };
    const prop = map[key];
    if (!prop) throw new Error(`Unknown flag --${key}`);
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed <= 0) {
      throw new Error(`--${key} must be a positive number, got "${value}"`);
    }
    flags[prop] = parsed;
  }
  return { positional, flags };
}

async function ensureFfmpeg() {
  try {
    await run("ffmpeg", ["-version"]);
  } catch {
    throw new Error(
      "ffmpeg not found on PATH. Install with: brew install ffmpeg",
    );
  }
}

async function hasGifsicle() {
  try {
    await run("gifsicle", ["--version"]);
    return true;
  } catch {
    return false;
  }
}

async function optimizeGif(gifPath, lossy) {
  // -O3: level 3 optimization (tries all optimization strategies).
  // --lossy=N: perceptual-loss compression; 80 is a sweet spot for scroll
  //   animations that are already noisy from page content.
  await run("gifsicle", ["-O3", `--lossy=${lossy}`, gifPath, "-o", gifPath]);
}

async function smoothScrollToBottom(page, durationMs) {
  await page.evaluate(async (ms) => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;
    // Neutralize site-level `scroll-behavior: smooth`, which animates every
    // scrollTo call on its own timeline and fights our per-frame animation.
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const savedHtml = htmlEl.style.scrollBehavior;
    const savedBody = bodyEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = "auto";
    bodyEl.style.scrollBehavior = "auto";

    // Linear motion keeps perceived velocity constant. Ease-in-out curves
    // (smoothstep, easeInOutSine) flatten to ~zero velocity near the endpoints,
    // which reads as the GIF "getting stuck" at the start or end.
    // A tiny 6% lead-in softens the kick-off without creating a dead zone.
    const LEAD_IN = 0.06;
    const start = performance.now();
    await new Promise((resolve) => {
      const step = (now) => {
        const t = Math.min(1, (now - start) / ms);
        const eased =
          t < LEAD_IN
            ? (t / LEAD_IN) * (t / LEAD_IN) * LEAD_IN // quadratic ease-in for the first 6%
            : t; // linear for the rest, including the tail
        window.scrollTo({ top: maxScroll * eased, behavior: "instant" });
        if (t < 1) requestAnimationFrame(step);
        else resolve(undefined);
      };
      requestAnimationFrame(step);
    });

    htmlEl.style.scrollBehavior = savedHtml;
    bodyEl.style.scrollBehavior = savedBody;
  }, durationMs);
}

// Small tail so the final frame lands cleanly at the bottom, not mid-scroll.
// Kept short because anything longer reads as "GIF froze at the end."
const TAIL_MS = 120;

async function record(url, _slug, flags) {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const viewport = {
    width: flags.viewportWidth,
    height: flags.viewportHeight,
  };

  const browser = await chromium.launch();
  // Time the recording window relative to recordingStartedAt so we can trim
  // the page-load intro out of the final GIF.
  const recordingStartedAt = Date.now();
  const context = await browser.newContext({
    viewport,
    recordVideo: { dir: TMP_DIR, size: viewport },
  });
  const page = await context.newPage();

  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

  await page.waitForTimeout(1500);
  await dismissCookieBanner(page);
  await page.evaluate(() =>
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }),
  );

  // Hold the hero briefly so the opening frames read cleanly.
  await page.waitForTimeout(flags.hold);

  const scrollStartedAt = Date.now();
  console.log(`Recording ${flags.duration}ms smooth scroll...`);
  await smoothScrollToBottom(page, flags.duration);
  await page.waitForTimeout(TAIL_MS);

  const video = page.video();
  if (!video) throw new Error("Video recording was not started.");

  await page.close();
  await context.close();
  await browser.close();

  const videoPath = await video.path();
  // Offset back a bit so the hero hold is visible as the opening frames.
  const offsetMs = Math.max(0, scrollStartedAt - recordingStartedAt - flags.hold);
  const durationMs = flags.hold + flags.duration + TAIL_MS;
  return { videoPath, offsetMs, durationMs };
}

function toFfmpegSeconds(ms) {
  return (ms / 1000).toFixed(3);
}

async function encodeGif(recording, slug, flags) {
  const { videoPath, offsetMs, durationMs } = recording;
  const gifPath = path.join(OUT_DIR, `${slug}.gif`);
  const palettePath = path.join(TMP_DIR, `${slug}-palette.png`);
  const filter = `fps=${flags.fps},scale=${flags.width}:-1:flags=lanczos`;

  // Input-side seek (-ss before -i) is the standard palettegen workflow and
  // is plenty accurate for second-scale offsets on a WebM intermediate.
  const seek = ["-ss", toFfmpegSeconds(offsetMs), "-t", toFfmpegSeconds(durationMs)];

  console.log("Generating palette...");
  await run("ffmpeg", [
    "-y",
    ...seek,
    "-i",
    videoPath,
    "-vf",
    `${filter},palettegen=stats_mode=diff`,
    palettePath,
  ]);

  console.log("Encoding GIF...");
  await run("ffmpeg", [
    "-y",
    ...seek,
    "-i",
    videoPath,
    "-i",
    palettePath,
    "-lavfi",
    `${filter} [x]; [x][1:v] paletteuse=dither=bayer:bayer_scale=5`,
    gifPath,
  ]);

  fs.rmSync(palettePath, { force: true });
  return gifPath;
}

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const [url, slug] = positional;
  if (!url || !slug) {
    console.error("Usage: node scripts/url-to-gif.mjs <url> <slug> [flags]");
    console.error("See the header of scripts/url-to-gif.mjs for flag docs.");
    process.exit(1);
  }

  await ensureFfmpeg();

  const recording = await record(url, slug, flags);
  const gifPath = await encodeGif(recording, slug, flags);

  if (!flags.keepVideo) {
    fs.rmSync(recording.videoPath, { force: true });
  } else {
    console.log(`Kept intermediate video at ${recording.videoPath}`);
  }

  const rawSize = fs.statSync(gifPath).size;
  if (!flags.skipOptimize && (await hasGifsicle())) {
    console.log(`Optimizing with gifsicle (lossy=${flags.lossy})...`);
    await optimizeGif(gifPath, flags.lossy);
    const optimizedSize = fs.statSync(gifPath).size;
    const savedPct = ((1 - optimizedSize / rawSize) * 100).toFixed(0);
    console.log(
      `Saved ${gifPath} (${(optimizedSize / 1024).toFixed(0)} KB, ${savedPct}% smaller)`,
    );
  } else {
    if (!flags.skipOptimize) {
      console.log(
        "gifsicle not found; skipping optimization. Install with: brew install gifsicle",
      );
    }
    console.log(`Saved ${gifPath} (${(rawSize / 1024).toFixed(0)} KB)`);
  }
}

main().catch((err) => {
  console.error(`Failed: ${err.message}`);
  process.exit(1);
});
