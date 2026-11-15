import { eventsContent } from "@/content/events"
import { parseIcsEvents, selectFeaturedEvents, type FeaturedEvent } from "@/lib/ics-events"

export async function getFeaturedEvents(now = new Date()): Promise<FeaturedEvent[]> {
  const { calendar, featured } = eventsContent

  try {
    const res = await fetch(calendar.icsUrl, {
      next: { revalidate: featured.revalidateSeconds },
      headers: { Accept: "text/calendar" },
    })
    if (!res.ok) return []

    const text = await res.text()
    return selectFeaturedEvents(
      parseIcsEvents(text),
      {
        include: featured.include,
        exclude: featured.exclude,
        limit: featured.limit,
      },
      now,
    )
  } catch {
    return []
  }
}
