/**
 * Events page copy — edit any string below.
 */

export const eventsContent = {
  meta: {
    title: "Events",
    description:
      "Upcoming CSA@UVA events and activities. Subscribe to our Google Calendar to stay in the loop.",
  },

  header: {
    title: "Events",
    lede: "Stay updated by checking our regularly updated Google Calendar!",
  },

  actions: {
    subscribe: "Subscribe to calendar",
  },

  calendarFeed: {
    button: "Manual Import",
    title: "Manual Import",
    instructions:
      "Copy the link below and paste it into any calendar app that takes iCal feeds (Google Calendar, iCal, Outlook, etc.)",
    viewLink: "Click to view Calendar Feed",
    close: "Close",
  },

  calendar: {
    iframeTitle: "CSA Events Calendar",
    caption: "Month view · America/New_York",
    embedUrl:
      "https://calendar.google.com/calendar/embed?src=c_o0ntjuei84bjmlpfqbcsr62u3c%40group.calendar.google.com&ctz=America%2FNew_York&mode=MONTH",
    subscribeUrl:
      "https://calendar.google.com/calendar/u/0?cid=c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com",
    icsUrl:
      "https://calendar.google.com/calendar/ical/c_o0ntjuei84bjmlpfqbcsr62u3c%40group.calendar.google.com/public/basic.ics",
  },
} as const;
