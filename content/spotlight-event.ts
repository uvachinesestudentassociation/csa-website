/**
 * Homepage spotlight countdown (big culture shows).
 * Swap this object for FMF / next year's Chinafest when the season changes.
 * Art: set `artSrc` under public/images/spotlight/; null keeps the placeholder.
 * `sealSrc` is unused in the ticket layout (kept optional for future flyer overlays).
 */

export type SpotlightEvent = {
  id: string
  name: string
  /** ISO timestamp with offset (America/New_York wall time). */
  startsAt: string
  dateLabel: string
  ctaLabel: string
  ctaHref: string
  closeLabel: string
  artLabel: string
  artSrc: string | null
  artAlt: string
  sealSrc: string | null
  sealAlt: string
  venueLine: string
}

/** Active spotlight — Chinafest 2027 (calendar all-day 3/27). */
export const spotlightEvent = {
  id: "chinafest-2027",
  name: "Chinafest",
  startsAt: "2027-03-27T00:00:00-04:00",
  dateLabel: "March 27, 2027",
  ctaLabel: "See calendar",
  ctaHref: "/events",
  closeLabel: "Close",
  artLabel: "Flyer art",
  artSrc: "/images/spotlight/chinafest-2027.jpg",
  artAlt: "Illustrated dragon dance with plum blossoms for Chinafest",
  sealSrc: null,
  sealAlt: "",
  venueLine: "MLK Performing Arts Center",
} as const satisfies SpotlightEvent

export function spotlightDismissKey(id: string) {
  return `csa-spotlight-dismissed:${id}`
}
