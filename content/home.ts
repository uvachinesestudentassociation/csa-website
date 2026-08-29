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
    headline: "Culture, community, and home on Grounds",
    ctaNew: "Join as a new member",
    ctaReturning: "Returning member →",
  },

  pillars: [
    {
      id: "culture",
      title: "Culture",
      line: "FullMoonFest, Chinafest, and events that showcase Chinese heritage on Grounds.",
      href: "/about#about-culture",
      imageSrc: "/images/gallery/chinafest_dragon_justin_2023.JPG",
      imageAlt: "Dragon dance at Chinafest",
    },
    {
      id: "community",
      title: "Community",
      line: "Families, socials, and friendships that last beyond graduation.",
      href: "/about#about-community",
      imageSrc: "/images/gallery/asu_exec_2023.jpg",
      imageAlt: "CSA executive board",
    },
    {
      id: "outreach",
      title: "Outreach",
      line: "Culturefest, CIO collabs, and welcoming all of Charlottesville.",
      href: "/about#about-outreach",
      imageSrc: "/images/gallery/yar_2023.jpg",
      imageAlt: "YAR tailgate",
    },
  ] as const,
} as const;
