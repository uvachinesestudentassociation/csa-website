/**
 * Events page copy and calendar URLs.
 */

export const eventsContent = {
  meta: {
    title: "Events",
    description:
      "Upcoming CSA@UVA events and activities. Subscribe to our Google Calendar to stay in the loop.",
  },

  header: {
    title: "Events",
    lede: "Stay up to date with our upcoming events. Subscribe to add them to your calendar.",
  },

  actions: {
    subscribe: "Subscribe",
    openCalendar: "Open in Google Calendar",
  },

  calendar: {
    iframeTitle: "CSA Events Calendar",
    embedUrl:
      "https://calendar.google.com/calendar/embed?src=c_o0ntjuei84bjmlpfqbcsr62u3c%40group.calendar.google.com&ctz=America%2FNew_York&mode=MONTH",
    subscribeUrl:
      "https://calendar.google.com/calendar/u/0?cid=c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com",
  },
} as const
