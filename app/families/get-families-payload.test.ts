import { describe, expect, it } from "vitest"
import { getFamiliesClientPayload, type FamilyPublic } from "./get-families-payload"

const sampleFamilies: FamilyPublic[] = [
  {
    id: "guppies",
    name: "Golden Guppies",
    shortTabLabel: "Guppies",
    image: "/images/2025-2026/families/guppies.jpg",
    instagramUrl: "https://www.instagram.com/csa.guppies/",
    description: "We are THE Golden Guppies",
  },
  {
    id: "jellyfish",
    name: "Jade Jellyfish",
    shortTabLabel: "Jellyfish",
    image: "/images/2025-2026/families/jellyfish.jpg",
    instagramUrl: "https://www.instagram.com/csa.jellyfish/",
    description: "We're the JADE JELLYFISH",
  },
]

describe("getFamiliesClientPayload", () => {
  it("production revealed → full roster, no dev toggle", () => {
    const payload = getFamiliesClientPayload({
      revealed: true,
      isDev: false,
      families: sampleFamilies,
    })

    expect(payload.contentRevealed).toBe(true)
    expect(payload.showDevToggle).toBe(false)
    expect(payload.gateCount).toBe(2)
    expect(payload.families).toEqual(sampleFamilies)
  })

  it("production sealed → full roster for blurred display, no dev toggle", () => {
    const payload = getFamiliesClientPayload({
      revealed: false,
      isDev: false,
      families: sampleFamilies,
    })

    expect(payload.contentRevealed).toBe(false)
    expect(payload.showDevToggle).toBe(false)
    expect(payload.gateCount).toBe(2)
    expect(payload.families).toEqual(sampleFamilies)
  })

  it("development sealed → full roster with dev blur toggle", () => {
    const payload = getFamiliesClientPayload({
      revealed: false,
      isDev: true,
      families: sampleFamilies,
    })

    expect(payload.contentRevealed).toBe(false)
    expect(payload.showDevToggle).toBe(true)
    expect(payload.gateCount).toBe(2)
    expect(payload.families).toEqual(sampleFamilies)
  })
})
