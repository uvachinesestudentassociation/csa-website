/**
 * Wraps whole-phrase matches from `phrases` in <strong>.
 * Used by About (and similar) so body text stays plain strings in content files.
 */
export function emphasizePhrases(
  text: string,
  phrases: readonly string[],
): Array<string | { strong: string }> {
  if (phrases.length === 0) return [text]

  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  const pattern = new RegExp(`(${escaped.join("|")})`, "g")
  const parts = text.split(pattern)

  return parts.filter(Boolean).map((part) =>
    phrases.includes(part) ? { strong: part } : part,
  )
}
