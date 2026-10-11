/**
 * Safe for the global navbar. Do not put the Venmo handle in this file.
 * `content/store.ts` holds the payment username and must stay server-only.
 *
 * The Store tab is public. Set `storeMockEnabled` to false to grey it out again.
 * Do not set `storeNavLink` to false — that breaks the nav keys.
 */

export const storeMockEnabled = true;

export const storeNavLink = { name: "Store", href: "/store" } as const;
