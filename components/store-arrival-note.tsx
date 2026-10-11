"use client"

import { isShirtPreorder } from "@/lib/preorder"

export function StoreArrivalNote({ until, note }: { until: string; note: string }) {
  if (!isShirtPreorder(new Date(), until)) return null
  return <p>{note}</p>
}
