/**
 * Sponsors page copy + this year's partner list.
 * Replace filler names, logos, and links when real assets are ready.
 * Logos live in /public/images/sponsors/
 *
 * Public nav visibility: content/sponsors-nav.ts → sponsorsEnabled
 */

export type Sponsor = {
  id: string
  name: string
  href: string
  logoSrc: string
  logoAlt: string
}

export const sponsorsContent = {
  meta: {
    title: "Sponsors",
    description:
      "Thank you to CSA@UVA's 2026–2027 partners, and learn how to sponsor our community.",
  },

  header: {
    title: "Sponsors",
    year: "2026–2027",
    lede: "The partners who help CSA bring culture and community to Grounds this year.",
  },

  art: {
    headerLabel: "Header art",
    partnersLabel: "Partners art",
    footerLabel: "Footer art",
  },

  showcase: {
    title: "Our partners",
    lede: "Filler marks for layout. Swap in real logos when you have them.",
  },

  why: {
    title: "Why sponsor CSA",
    lede: "Placeholder pitch - Fundraising can rewrite these with the real offer.",
    points: [
      {
        title: "Reach students on Grounds",
        body: "Your name shows up across GBMs, culture shows, and socials that draw hundreds of UVA students.",
      },
      {
        title: "Stand with a culture org",
        body: "Support Chinese culture programming that welcomes the whole Charlottesville community.",
      },
      {
        title: "Flexible partnership",
        body: "Logo placement, event shoutouts, and tabling - shaped with Fundraising to fit what you offer.",
      },
    ],
  },

  recruit: {
    title: "Become a sponsor",
    lede: "Interested in partnering with CSA for 2026–2027? Reach out to our Fundraising chairs.",
    cta: "Contact Fundraising",
    /** Replace with a real form or mailto when ready. */
    ctaHref: "mailto:csa-uva-fundraising@virginia.edu",
    note: "Placeholder email - update when Fundraising confirms the right inbox or form.",
  },

  sponsors: [
    {
      id: "willow-kitchen",
      name: "Willow Kitchen",
      href: "#",
      logoSrc: "/images/sponsors/placeholder-a.svg",
      logoAlt: "Willow Kitchen logo placeholder",
    },
    {
      id: "oak-and-lantern",
      name: "Oak & Lantern",
      href: "#",
      logoSrc: "/images/sponsors/placeholder-b.svg",
      logoAlt: "Oak & Lantern logo placeholder",
    },
    {
      id: "red-bridge-goods",
      name: "Red Bridge Goods",
      href: "#",
      logoSrc: "/images/sponsors/placeholder-c.svg",
      logoAlt: "Red Bridge Goods logo placeholder",
    },
    {
      id: "north-court-cafe",
      name: "North Court Cafe",
      href: "#",
      logoSrc: "/images/sponsors/placeholder-a.svg",
      logoAlt: "North Court Cafe logo placeholder",
    },
    {
      id: "paper-crane-co",
      name: "Paper Crane Co.",
      href: "#",
      logoSrc: "/images/sponsors/placeholder-b.svg",
      logoAlt: "Paper Crane Co. logo placeholder",
    },
    {
      id: "harbor-light",
      name: "Harbor Light",
      href: "#",
      logoSrc: "/images/sponsors/placeholder-c.svg",
      logoAlt: "Harbor Light logo placeholder",
    },
  ] satisfies Sponsor[],
} as const
