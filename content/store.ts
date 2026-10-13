/**
 * Server-only Store copy. Do not import this from client components.
 * The navbar must import `@/content/store-nav` so the Venmo handle
 * is not bundled into JavaScript loaded on every page.
 *
 * The shop is public (`storeMockEnabled` in `store-nav.ts`). Set that flag
 * to false to grey the tab out again.
 */

import { storeMockEnabled, storeNavLink } from "./store-nav"

export { storeMockEnabled, storeNavLink }

export const storeContent = {
  venmoUsername: "csaatuva",

  navLink: storeNavLink,

  meta: {
    title: "Store",
    description: "CSA@UVA shirts. Payments open in Venmo.",
  },

  intro: {
    title: "Store",
  },

  purchaseLabel: "+ Purchase",
  preorderLabel: "Pre-order",
  preorderUntil: "2026-10-26",
  arrivalNote: "Pick up merch at FMF (Oct 31).",
  sizeLabel: "Size",
} as const

/** Passed into store client components so they never import this file. */
export const storePurchaseCopy = {
  venmoUsername: storeContent.venmoUsername,
  purchaseLabel: storeContent.purchaseLabel,
  preorderLabel: storeContent.preorderLabel,
  preorderUntil: storeContent.preorderUntil,
  arrivalNote: storeContent.arrivalNote,
  sizeLabel: storeContent.sizeLabel,
}
