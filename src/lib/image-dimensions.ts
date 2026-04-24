import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";

const PUBLIC_DIR = path.resolve("public");
const cache = new Map<string, { width: number; height: number } | null>();

/**
 * Read intrinsic width/height for an asset under `public/`. Used in page
 * templates to emit correct `width`/`height` attributes on hero images so
 * the browser reserves layout space ahead of the image decode, avoiding
 * Cumulative Layout Shift (CLS) when the asset arrives on slower networks.
 *
 * Missing or unreadable files return `null` rather than throwing: the
 * template should fall back to sensible defaults so a typo in a frontmatter
 * path never crashes the build.
 */
export function measurePublicImage(publicPath: string): { width: number; height: number } | null {
  const cached = cache.get(publicPath);
  if (cached !== undefined) return cached;

  if (!publicPath.startsWith("/")) {
    cache.set(publicPath, null);
    return null;
  }

  const absolute = path.join(PUBLIC_DIR, publicPath);
  if (!fs.existsSync(absolute)) {
    cache.set(publicPath, null);
    return null;
  }

  try {
    const buf = fs.readFileSync(absolute);
    const out = imageSize(buf);
    if (typeof out.width !== "number" || typeof out.height !== "number") {
      cache.set(publicPath, null);
      return null;
    }
    const dims = { width: out.width, height: out.height };
    cache.set(publicPath, dims);
    return dims;
  } catch {
    cache.set(publicPath, null);
    return null;
  }
}
