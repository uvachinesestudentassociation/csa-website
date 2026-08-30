/**
 * Officers page UI copy — edit labels here.
 *
 * Board title, names, roles, and bios live in:
 *   app/officers/officers-data.json
 */

export const officersContent = {
  meta: {
    title: "Officers",
    description:
      "Meet the CSA@UVA executive and officer board for the current academic year.",
  },

  boardImageAlt: "Executive and Officer Board",
  videoTitle: "CSA board video",
  youtubeFallback: "Watch on YouTube",

  tabs: {
    executive: "Executive Board",
    officer: "Officer Board",
  },

  card: {
    tapForBio: "Tap for bio",
  },

  /** Remove or set enabled: false when the 2026–27 board is ready to publish. */
  comingSoon: {
    enabled: true as boolean,
    banner: "26-27 Officers Coming soon",
  },
} as const;
