/**
 * Safe for the global navbar. Do not put the Venmo handle in this file.
 * `content/store.ts` holds the payment username and must stay server-only.
 *
 * The Store tab is always shown. Flip `storeMockEnabled` to true (or drop the
 * NODE_ENV gate) when the shop should be clickable and public.
 *
 * To preview the greyed tab locally, set `storeMockEnabled` to `false`.
 * Do not set `storeNavLink` to false — that breaks the nav keys.
 */

export const storeMockEnabled = process.env.NODE_ENV === "development";

export const storeNavLink = { name: "Store", href: "/store" } as const;
