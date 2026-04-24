const SITE = "https://indie.md";

/**
 * Build the canonical absolute URL for a given path.
 *
 * Every internal URL on indie.md resolves to /path/index.html, so the
 * canonical form must end with a trailing slash to match what the sitemap
 * emits and what the server serves. Mismatched canonical vs sitemap URLs
 * are one of the most common duplicate-content bugs on Astro sites.
 */
export function canonicalUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE}/`;
  const withoutTrailing = path.replace(/\/+$/, "");
  return `${SITE}${withoutTrailing}/`;
}

export const SITE_URL = SITE;
