import fs from "node:fs";
import path from "node:path";
import type { Element, Root } from "hast";
import { imageSize } from "image-size";
import { visit } from "unist-util-visit";

type Dimensions = { width: number; height: number };

/**
 * Measure every `<img>` emitted by the markdown pipeline once and stamp its
 * intrinsic `width` and `height` onto the HTML so the browser can reserve
 * the correct aspect ratio box during layout. Absent these, raw markdown
 * images cause large CLS spikes, especially on slow connections where the
 * image load resolves long after the surrounding text.
 *
 * Only local paths that resolve under `public/` are inspected. Missing files
 * and unreadable images are logged once per build and skipped, so a new
 * image dropped into a post never breaks the build before the author has
 * finished wiring it up.
 */
export default function rehypeImageDimensions() {
  const publicDir = path.resolve("public");
  const cache = new Map<string, Dimensions | null>();
  const warned = new Set<string>();

  function measure(srcPath: string): Dimensions | null {
    const cached = cache.get(srcPath);
    if (cached !== undefined) return cached;

    if (!fs.existsSync(srcPath)) {
      cache.set(srcPath, null);
      return null;
    }

    try {
      const buf = fs.readFileSync(srcPath);
      const out = imageSize(buf);
      if (typeof out.width === "number" && typeof out.height === "number") {
        const dims = { width: out.width, height: out.height };
        cache.set(srcPath, dims);
        return dims;
      }
    } catch (err) {
      if (!warned.has(srcPath)) {
        warned.add(srcPath);
        console.warn(`[rehype-image-dimensions] Could not read ${srcPath}:`, err);
      }
    }
    cache.set(srcPath, null);
    return null;
  }

  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "img") return;
      const props = node.properties ?? {};
      if (props.width !== undefined && props.height !== undefined) return;

      const src = typeof props.src === "string" ? props.src : null;
      if (!src || !src.startsWith("/")) return;

      const srcPath = path.join(publicDir, src);
      const dims = measure(srcPath);
      if (!dims) return;

      node.properties = {
        ...props,
        width: dims.width,
        height: dims.height,
        loading: props.loading ?? "lazy",
        decoding: props.decoding ?? "async",
      };
    });
  };
}
