/**
 * Server-only Store copy. Do not import this from client components.
 * The navbar must import `@/content/store-nav` so the Venmo handle
 * is not bundled into JavaScript loaded on every page.
 *
 * Replace `venmoUsername` and `app/store/store-data.json` when real merch exists,
 * then set `storeMockEnabled` in `store-nav.ts` to true (or always on) to ship the tab.
 */

import { storeMockEnabled, storeNavLink } from "./store-nav"

export { storeMockEnabled, storeNavLink }

export const storeContent = {
  venmoUsername: "CSA-Venmo-Username",

  navLink: storeNavLink,

  meta: {
    title: "Store",
    description: "CSA@UVA merch mock shop. Payments open in Venmo.",
  },

  intro: {
    title: "Store",
    body: "A few pieces for the year. Designs are not final.",
  },

  purchaseLabel: "+ Purchase",
  purchaseCaption:
    "Opens Venmo with the price and item note filled in. You can still edit both before you pay.",
  sizeLabel: "Size",
} as const

/** Passed into store client components so they never import this file. */
export const storePurchaseCopy = {
  venmoUsername: storeContent.venmoUsername,
  purchaseLabel: storeContent.purchaseLabel,
  purchaseCaption: storeContent.purchaseCaption,
  sizeLabel: storeContent.sizeLabel,
}
