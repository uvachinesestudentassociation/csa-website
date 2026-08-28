/**
 * Alumni page copy — edit page-level text here.
 *
 * Class years, photos, and member rosters live in:
 *   app/alumni/alumni-data.json
 */

export const alumniContent = {
  meta: {
    title: "Alumni",
    description: "Celebrating CSA@UVA alumni and their contributions to our organization.",
  },

  intro: {
    title: "Alumni",
    body: "Celebrating our CSA alumni and their contributions to our organization.",
  },

  yearSelectLabel: "Select alumni class year",
  classOf: (year: number) => `Class of ${year}`,
  memberCount: (count: number) =>
    `${count} ${count === 1 ? "member" : "members"}`,

  roles: {
    exec: "Exec",
    officer: "Officer",
    familyHead: "Family Head",
  },
} as const
