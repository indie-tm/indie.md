interface PersonHandleSource {
  twitter?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  sameAs?: string[];
  products?: { url: string }[];
}

function normaliseHandle(handle: string): string {
  return handle.trim().replace(/^@/, "");
}

/**
 * Build the canonical list of URLs we emit as Person JSON-LD `sameAs`.
 * Prefers explicit URLs in `sameAs`, then expands the short handle fields,
 * then falls back to the first product URL so search engines always have
 * at least one corroborating link between a person entity and the open web.
 */
export function buildPersonSameAs(person: PersonHandleSource): string[] {
  const urls = new Set<string>();

  for (const raw of person.sameAs ?? []) {
    urls.add(raw);
  }
  if (person.twitter) {
    urls.add(`https://x.com/${normaliseHandle(person.twitter)}`);
  }
  if (person.github) {
    urls.add(`https://github.com/${normaliseHandle(person.github)}`);
  }
  if (person.linkedin) {
    const handle = normaliseHandle(person.linkedin);
    if (handle.startsWith("http")) {
      urls.add(handle);
    } else {
      urls.add(`https://www.linkedin.com/in/${handle}`);
    }
  }
  if (person.website) {
    urls.add(person.website);
  }
  if (urls.size === 0 && person.products && person.products.length > 0) {
    urls.add(person.products[0].url);
  }

  return Array.from(urls);
}
