/**
 * About page copy — edit any string below.
 */

export const aboutContent = {
  meta: {
    title: "About",
    description:
      "Learn about CSA@UVA's mission to promote Chinese culture, build community, and engage with Charlottesville.",
  },

  cover: {
    alt: "CSA Group Photo",
  },

  intro: {
    title: "About",
    paragraphs: [
      "The Chinese Student Association at the University of Virginia (CSA@UVA) seeks to promote Chinese culture within the University and greater Charlottesville community.",
      "CSA welcomes and encourages people of all ages, races, and backgrounds!",
    ],
  },

  culture: {
    title: "Culture",
    paragraphs: [
      "Our primary goal is to nurture and celebrate Chinese culture and heritage. We hold two large cultural showcases annually: FullMoonFest for Mid-Autumn Festival, and Chinafest for Lunar New Year. Both include dances, skits, and other entertainment, exhibiting facets of both traditional and modern Chinese culture.",
      "Even though our primary goal is to celebrate Chinese culture, we invite people from all cultures and backgrounds to join CSA. Our events like Dollar Dim Sum provide opportunities for everyone to experience authentic Chinese cuisine and traditions.",
    ],
    /** Words to render bold inside the paragraphs above (matched as whole phrases). */
    emphasis: ["FullMoonFest", "Chinafest", "Dollar Dim Sum"],
    imageAlt: "Dragon Dance at Chinafest",
  },

  community: {
    title: "Community",
    paragraphs: [
      "Beyond cultural celebrations, CSA prides itself on our community and unity. Our family system forges lifelong connections, where individuals find support, mentorship, and a sense of belonging. We spend time and connect with friends old and new, whether through sports, parties, or other social events. We create bonds beyond just cultural affiliations.",
    ],
    emphasis: ["family system"],
    imageAlt: "CSA Executive Board",
  },

  outreach: {
    title: "Outreach",
    paragraphs: [
      "Finally, CSA spreads our goals throughout the whole surrounding community. We participate in Culturefest, UVA's annual multicultural showcase; interact and co-host events with other CIOs on-grounds such as UPC and other multicultural organizations; and invite the whole UVA and Charlottesville community to come to our events, especially for our large culture shows like FullMoonFest and Chinafest. We celebrate Chinese culture with anyone and everyone.",
    ],
    emphasis: ["Culturefest"],
    imageAlt: "YAR Tailgate",
  },
} as const
