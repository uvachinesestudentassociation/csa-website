/**
 * Shared site-wide copy (nav, footer, brand, forms).
 * Edit strings here — pages and chrome import from this file.
 */

export const siteContent = {
  brand: {
    name: "CSA@UVA",
    fullName: "Chinese Student Association at UVA",
    eyebrow: "Chinese Student Association · University of Virginia",
  },

  forms: {
    newMember:
      "https://docs.google.com/forms/d/1IJpfdlxr7xssdubWsDVTqSrGaAiJyIdtcGHYZXeInhw/viewform",
    returningMember:
      "https://docs.google.com/forms/d/11_qaSL1IiBrtmic8Z_uvV28ASoNvcUp2JaCFi7mtRVk/viewform",
  },

  nav: {
    links: [
      { name: "About", href: "/about" },
      { name: "Events", href: "/events" },
      { name: "Families", href: "/families" },
      { name: "Officers", href: "/officers" },
      { name: "Gallery", href: "/gallery" },
      { name: "Archive", href: "/gallery/archive" },
      { name: "Alumni", href: "/alumni" },
    ],
    joinLabel: "Join",
    joinMobileLabel: "Join as a new member",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
  },

  footer: {
    tagline: "Culture, community, and home on Grounds.",
    links: [
      { name: "About", href: "/about" },
      { name: "Events", href: "/events" },
      { name: "Families", href: "/families" },
      { name: "Gallery", href: "/gallery" },
    ],
    copyright: "Chinese Student Association at UVA. All rights reserved.",
  },

  meta: {
    defaultTitle: "CSA@UVA - Chinese Student Association",
    titleTemplate: "%s | CSA@UVA",
    description: "Chinese Student Association at the University of Virginia",
  },
} as const
