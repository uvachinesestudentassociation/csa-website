import { describe, expect, it } from "vitest"
import { homeContent } from "./home"
import { siteContent } from "./site"

describe("home chrome contract", () => {
  it("locks the human-written hero headline", () => {
    expect(homeContent.hero.headline).toBe(
      "Culture, community, and home on Grounds",
    )
  })

  it("does not repeat the hero headline in the footer statement", () => {
    const headline = homeContent.hero.headline
    const footerStatement = siteContent.brand.fullName.replace(/\.$/, "")
    expect(footerStatement).not.toBe(headline)
  })

  it("keeps the original footer tagline in site content", () => {
    expect(siteContent.footer.tagline).toBe(
      "Culture, community, and home on Grounds.",
    )
  })
})
