/**
 * Families page copy — edit page-level text here.
 *
 * Per-family names, bios, and Instagram links live in:
 *   app/families/families-data.json
 */

export const familiesContent = {
  meta: {
    title: "Families",
    description:
      "Learn about CSA@UVA's family system and meet this year's families.",
  },

  /** Flip to true after the family reveal to unlock names, bios, photos, and Instagram (also gates roster data shipped to the client). */
  revealed: false as boolean,

  /**
   * Scrolls with index below this value stay blurred until `revealed` is true.
   * 0 = all clear · 1 = blur scroll 0 only · N = blur scrolls 0…N-1.
   */
  revealFromIndex: 3 as number,

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
    /** One banner per scroll, left to right */
    banners: [
      "/images/graphics/Azure dragon banner.png",
      "/images/graphics/Monkey king banner.png",
      "/images/graphics/White Tiger banner.png",
    ],
  },

  card: {
    instagramLabel: "View on Instagram",
  },
} as const;
