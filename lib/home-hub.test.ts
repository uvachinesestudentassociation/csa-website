import { describe, expect, it } from "vitest"
import { siteContent } from "@/content/site"
import { getHomeHubLinks } from "./home-hub"

describe("getHomeHubLinks", () => {
  it("returns exactly four hub links in the required order", () => {
    const links = getHomeHubLinks(siteContent.nav.links)
    expect(links).toHaveLength(4)
    expect(links.map((link) => link.href)).toEqual([
      "/events",
      "/families",
      "/gallery",
      "/about",
    ])
  })

  it("uses nav labels for Events, Families, Gallery, and About", () => {
    const links = getHomeHubLinks(siteContent.nav.links)
    expect(links.map((link) => link.name)).toEqual([
      "Events",
      "Families",
      "Gallery",
      "About",
    ])
  })

  it("excludes Officers, Archive, and Alumni", () => {
    const links = getHomeHubLinks(siteContent.nav.links)
    const names = links.map((link) => link.name)
    const hrefs = links.map((link) => link.href)
    expect(names).not.toContain("Officers")
    expect(names).not.toContain("Archive")
    expect(names).not.toContain("Alumni")
    expect(hrefs).not.toContain("/officers")
    expect(hrefs).not.toContain("/gallery/archive")
    expect(hrefs).not.toContain("/alumni")
  })

  it("throws when required hrefs are missing", () => {
    const officersOnly = [{ name: "Officers", href: "/officers" }]
    expect(() => getHomeHubLinks(officersOnly)).toThrow(
      /missing nav entries for/,
    )
  })
})
