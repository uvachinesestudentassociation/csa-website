/**
 * Gallery page copy — edit any string below.
 *
 * Current-year album list lives in:
 *   app/gallery/gallery-data.json
 *
 * When adding an album, look up the event on the CSA Google Calendar and set
 * `date` as M/D/YYYY (or "" if it is a recap / not on the calendar):
 *   https://calendar.google.com/calendar/ical/c_o0ntjuei84bjmlpfqbcsr62u3c%40group.calendar.google.com/public/basic.ics
 */

export const galleryContent = {
  meta: {
    title: "Gallery",
    description: "Photos from CSA@UVA's 2026–2027 events and activities.",
  },

  intro: {
    title: "Gallery",
    body: "Photos from our 2026–2027 events and activities.",
  },

  search: {
    label: "Search albums",
    placeholder: "Search albums...",
    empty: "No albums match your search.",
  },

  archiveButton: "View Archive",
} as const
