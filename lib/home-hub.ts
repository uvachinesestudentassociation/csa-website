export const homeHubHrefs = ["/events", "/families", "/gallery", "/about"] as const

export type NavLink = { readonly name: string; readonly href: string }

export function getHomeHubLinks(navLinks: readonly NavLink[]): NavLink[] {
  const byHref = new Map(navLinks.map((link) => [link.href, link]))
  const missing: string[] = []
  const result: NavLink[] = []
  for (const href of homeHubHrefs) {
    const link = byHref.get(href)
    if (!link) missing.push(href)
    else result.push(link)
  }
  if (missing.length > 0) {
    throw new Error(`getHomeHubLinks: missing nav entries for ${missing.join(", ")}`)
  }
  return result
}
