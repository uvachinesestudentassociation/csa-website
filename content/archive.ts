/**
 * Gallery archive page copy — edit any string below.
 *
 * Archived album list lives in:
 *   app/gallery/archive/archive-data.json
 *
 * When adding an album, look up the event on the CSA Google Calendar and set
 * `date` as M/D/YYYY (or "" if it is a recap / not on the calendar):
 *   https://calendar.google.com/calendar/ical/c_o0ntjuei84bjmlpfqbcsr62u3c%40group.calendar.google.com/public/basic.ics
 */

export const archiveContent = {
  meta: {
    title: "Gallery Archive",
    description: "Archived photo albums from past CSA@UVA events and activities.",
  },

  title: "Archive",
  backLabel: "Back to gallery",

  search: {
    label: "Search archive albums",
    placeholder: "Search archive albums...",
    empty: "No albums match your search.",
  },

  facebookAlbums: {
    label: "Facebook Group Photo Albums (2013-2022)",
    href: "https://www.facebook.com/csa.uva/photos_albums",
  },
} as const
