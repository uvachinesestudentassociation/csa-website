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

  /** Flip to true after the family reveal to unlock names, bios, photos, and Instagram. */
  revealed: false as boolean,

  intro: {
    title: "Families",
    body: "Every year, all members are assigned to different families. Families play a major role in CSA's social activities, from organizing family events to creating a sense of community for both new and old members. The family system cultivates strong connections, fostering friendships and shared experiences that define the essence of the CSA.",
  },

  sealed: {
    plaqueHint: "Sealed",
    a11yLabel: "Family identity sealed",
    gateOrdinals: ["一", "二", "三"] as const,
    sceneSealedAlt: "Three sealed doors in a connected roadside wall",
    sceneOpenAlt: "Three open doors in a connected roadside wall",
  },

  card: {
    instagramLabel: "View on Instagram",
  },
} as const;
