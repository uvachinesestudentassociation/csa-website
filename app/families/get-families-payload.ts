export type FamilyPublic = {
  id: string
  name: string
  shortTabLabel: string
  image: string
  instagramUrl: string
  description: string
}

export type FamiliesClientPayload = {
  /** True when the public reveal flag is on (no blur). */
  contentRevealed: boolean
  /** Dev-only: toggle blur off to preview unblurred scrolls. Always false in production. */
  showDevToggle: boolean
  families: FamilyPublic[]
  gateCount: number
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
    }
  }

  return {
    contentRevealed: false,
    showDevToggle: isDev,
    families,
    gateCount,
  }
}
