/**
 * Families page copy — edit page-level text here.
 *
 * Per-family names, bios, photos, and Instagram links live in:
 *   app/families/families-data.json
 */

export const familiesContent = {
  meta: {
    title: "Families",
    description:
      "Learn about CSA@UVA's family system and meet this year's families.",
  },

  /** Flip to true after the family reveal to unblur the scrolls and show names/bios. */
  revealed: false as boolean,

  intro: {
    title: "Families",
  },

  sealed: {
    a11yLabel: "Family identity sealed",
    sceneSealedAlt: "Three rolled hanging scrolls",
    sceneBackdropAlt: "Dark hall backdrop for hanging family scrolls",
  },

  scrollAssets: {
    backdrop: "",
    scroll: "/images/graphics/blank-scroll.png",
  },

  card: {
    instagramLabel: "View on Instagram",
  },
} as const;
