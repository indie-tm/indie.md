const DEFAULT_MAX = 155;

/**
 * Trim a string to at most `max` characters, preferring sentence boundaries
 * then word boundaries. Avoids the mid-word cuts that `String.prototype.slice`
 * produces, which look broken in SERP snippets and social previews.
 */
export function summarize(text: string, max: number = DEFAULT_MAX): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;

  const window = trimmed.slice(0, max + 1);
  const lastSentence = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? "),
  );
  if (lastSentence >= max * 0.6) {
    return trimmed.slice(0, lastSentence + 1);
  }

  const lastSpace = window.lastIndexOf(" ");
  if (lastSpace > 0) {
    return `${trimmed.slice(0, lastSpace).trimEnd()}…`;
  }

  return `${trimmed.slice(0, max).trimEnd()}…`;
}
