/**
 * Home page copy — edit any string below.
 */

export const homeContent = {
  meta: {
    title: "Home",
    description:
      "Welcome to CSA@UVA — the Chinese Student Association at the University of Virginia, promoting Chinese culture on grounds and in Charlottesville.",
  },

  hero: {
    place: "Grounds · Charlottesville",
    headline: "Culture, community, and home on Grounds",
    ctaNew: "Join as a new member",
    ctaReturning: "Returning member →",
  },

  welcome: {
    title: "Chinese heritage, open to every background",
    body: "CSA@UVA celebrates Chinese culture at the University of Virginia and across Charlottesville — through showcases like FullMoonFest and Chinafest, Dollar Dim Sum, and a family system built for belonging.",
    destinations: [
      { href: "/about", label: "About", note: "Mission on Grounds" },
      { href: "/events", label: "Events", note: "FullMoonFest · Chinafest" },
      { href: "/families", label: "Families", note: "Mentorship & belonging" },
      { href: "/gallery", label: "Gallery", note: "From the archive" },
    ],
  },

  photoBand: {
    caption: "Chinafest · Lunar New Year",
    imageAlt: "Dragon dance at Chinafest",
  },

  join: {
    title: "Come find your people",
    body: "Whether you're new to Grounds or returning for another year, joining has never been easier.",
    ctaNew: "New member form",
    ctaReturning: "Returning members →",
  },
} as const;
