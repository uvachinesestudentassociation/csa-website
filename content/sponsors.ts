/**
 * Sponsors page copy + this year's partner list.
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
      "CSA@UVA's 2026–2027 sponsors and fundraiser hosts.",
  },

  header: {
    title: "Sponsors",
    year: "2026–2027",
    lede: "Our partners and fundraiser hosts for this year.",
  },

  partners: {
    title: "Partners",
    lede: "",
  },

  venues: {
    title: "Fundraiser hosts",
    lede: "",
  },

  why: {
    title: "Why sponsor CSA",
    lede: "",
    points: [
      {
        title: "Reach students on Grounds",
        body: "Your name appears across GBMs, culture shows, and socials that draw hundreds of UVA students.",
      },
      {
        title: "Support a culture organization",
        body: "Help bring Chinese culture programming to Grounds and the Charlottesville community.",
      },
      {
        title: "Flexible partnership",
        body: "Logo placement, event shoutouts, and tabling — shaped with Fundraising to fit what you offer.",
      },
    ],
  },

  recruit: {
    title: "Become a sponsor",
    lede: "Interested in partnering with CSA for 2026–2027? Contact our Fundraising chairs.",
    cta: "Contact Fundraising",
    /** Flip on when the Fundraising inbox / form is ready. */
    ctaEnabled: false,
    ctaHref: "mailto:csa-uva-fundraising@virginia.edu",
    note: "",
  },

  sponsors: [
    {
      id: "doordash",
      name: "DoorDash",
      href: "https://www.doordash.com",
      logoSrc: "/images/sponsors/doordash.svg",
      logoAlt: "DoorDash logo",
    },
    {
      id: "raising-canes",
      name: "Raising Cane's",
      href: "https://www.raisingcanes.com",
      logoSrc: "/images/sponsors/raising-canes.svg",
      logoAlt: "Raising Cane's Chicken Fingers logo",
    },
    {
      id: "chipotle",
      name: "Chipotle",
      href: "https://www.chipotle.com",
      logoSrc: "/images/sponsors/chipotle.svg",
      logoAlt: "Chipotle Mexican Grill logo",
    },
    {
      id: "blume-on-ivy",
      name: "Blume on Ivy",
      href: "https://www.blumeonivy.com",
      logoSrc: "/images/sponsors/blume-on-ivy.svg",
      logoAlt: "Blume on Ivy logo",
    },
    {
      id: "good-molecules",
      name: "Good Molecules",
      href: "https://goodmolecules.com",
      logoSrc: "/images/sponsors/good-molecules.png",
      logoAlt: "Good Molecules logo",
    },
    {
      id: "mai-tea",
      name: "Mai Tea",
      href: "https://maiteavietnamesecuisine.com",
      logoSrc: "/images/sponsors/mai-tea.webp",
      logoAlt: "Mai Tea Vietnamese Cuisine logo",
    },
    {
      id: "rock-revolution",
      name: "Rock Revolution",
      href: "https://www.climbrockrevolution.com",
      logoSrc: "/images/sponsors/rock-revolution.svg",
      logoAlt: "Rock Revolution logo",
    },
    {
      id: "pineapple-thai",
      name: "Pineapple Thai",
      href: "https://www.pineapplescville.com",
      logoSrc: "/images/sponsors/pineapple-thai.png",
      logoAlt: "Pineapples Thai Kitchen logo",
    },
    {
      id: "ryse",
      name: "RYSE",
      href: "https://www.drinkryse.com",
      logoSrc: "/images/sponsors/ryse.svg",
      logoAlt: "RYSE logo",
    },
    {
      id: "bonchon",
      name: "Bonchon Chicken",
      href: "https://www.bonchon.com",
      logoSrc: "/images/sponsors/bonchon.svg",
      logoAlt: "Bonchon Chicken logo",
    },
  ] satisfies Sponsor[],

  fundraiserHosts: [
    {
      id: "roots",
      name: "Roots",
      href: "https://www.rootsnaturalkitchen.com/locations/charlottesville/",
      logoSrc: "/images/sponsors/roots.png",
      logoAlt: "Roots Natural Kitchen logo",
    },
    {
      id: "teado",
      name: "Teado",
      href: "https://www.teadonova.com",
      logoSrc: "/images/sponsors/teado.svg",
      logoAlt: "Tea-Do logo",
    },
    {
      id: "moge-tee",
      name: "Moge Tee",
      href: "https://www.mogeteeusa.com/store-locations-1/va",
      logoSrc: "/images/sponsors/moge-tee.svg",
      logoAlt: "Moge Tee logo",
    },
  ] satisfies Sponsor[],
} as const
