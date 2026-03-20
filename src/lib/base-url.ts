const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

/** Prefix a path with the site base URL (e.g. "/indie.md" on GitHub Pages, "" locally). */
export function assetPath(path: string): string {
  if (path.startsWith("/")) {
    return `${base}${path}`;
  }
  return `${base}/${path}`;
}

/** Alias for internal links: same behavior as assetPath. */
export const href = assetPath;
