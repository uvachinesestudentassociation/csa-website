export type FamilyPublic = {
  id: string
  name: string
  shortTabLabel: string
  image: string
  instagramUrl: string
  description: string
}

export type FamiliesClientPayload = {
  /** True when UI may show open state from content flag (not dev toggle). */
  contentRevealed: boolean
  /** Dev-only blur toggle for local preview. Always false in production builds. */
  showDevToggle: boolean
  /** Roster safe to serialize to the client component. */
  families: FamilyPublic[]
  gateCount: number
  /** Dev-only: full roster for local preview toggle. Always [] in production builds. */
  devPreviewFamilies: FamilyPublic[]
}

function sealedStubs(gateCount: number): FamilyPublic[] {
  return Array.from({ length: gateCount }, (_, i) => ({
    id: `sealed-${i}`,
    name: "",
    shortTabLabel: "",
    image: "",
    instagramUrl: "",
    description: "",
  }))
}

export function getFamiliesClientPayload({
  revealed,
  isDev,
  families,
}: {
  revealed: boolean
  isDev: boolean
  families: FamilyPublic[]
}): FamiliesClientPayload {
  const gateCount = families.length

  if (revealed) {
    return {
      contentRevealed: true,
      showDevToggle: false,
      families,
      gateCount,
      devPreviewFamilies: [],
    }
  }

  const stubs = sealedStubs(gateCount)

  if (isDev) {
    return {
      contentRevealed: false,
      showDevToggle: true,
      families: stubs,
      gateCount,
      devPreviewFamilies: families,
    }
  }

  return {
    contentRevealed: false,
    showDevToggle: false,
    families: stubs,
    gateCount,
    devPreviewFamilies: [],
  }
}
