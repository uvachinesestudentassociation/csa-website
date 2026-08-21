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

function assertEmptyStub(family: FamilyPublic, index: number) {
  expect(family).toEqual({
    id: `sealed-${index}`,
    name: "",
    shortTabLabel: "",
    image: "",
    instagramUrl: "",
    description: "",
  })
}

describe("getFamiliesClientPayload", () => {
  it("production revealed → full roster in families, empty devPreview", () => {
    const payload = getFamiliesClientPayload({
      revealed: true,
      isDev: false,
      families: sampleFamilies,
    })

    expect(payload.contentRevealed).toBe(true)
    expect(payload.gateCount).toBe(2)
    expect(payload.families).toEqual(sampleFamilies)
    expect(payload.devPreviewFamilies).toEqual([])
  })

  it("production sealed → empty stubs only, no real fields, empty devPreview", () => {
    const payload = getFamiliesClientPayload({
      revealed: false,
      isDev: false,
      families: sampleFamilies,
    })

    expect(payload.contentRevealed).toBe(false)
    expect(payload.gateCount).toBe(2)
    expect(payload.families).toHaveLength(2)
    payload.families.forEach(assertEmptyStub)
    expect(payload.devPreviewFamilies).toEqual([])

    const serialized = JSON.stringify(payload)
    expect(serialized).not.toContain("Golden Guppies")
    expect(serialized).not.toContain("guppies.jpg")
    expect(serialized).not.toContain("instagram.com")
  })

  it("development sealed → stubs in families, full roster only in devPreview", () => {
    const payload = getFamiliesClientPayload({
      revealed: false,
      isDev: true,
      families: sampleFamilies,
    })

    expect(payload.contentRevealed).toBe(false)
    expect(payload.gateCount).toBe(2)
    expect(payload.families).toHaveLength(2)
    payload.families.forEach(assertEmptyStub)
    expect(payload.devPreviewFamilies).toEqual(sampleFamilies)
  })
})
