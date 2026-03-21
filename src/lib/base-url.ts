/** Prefix a path with the site base URL. With a custom domain, this is a no-op. */
export function assetPath(path: string): string {
  return path;
}

/** Alias for internal links. */
export const href = assetPath;
