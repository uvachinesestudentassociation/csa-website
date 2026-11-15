"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { FeaturedEvent } from "@/lib/ics-events"

type HomeEventsCarouselProps = {
  events: FeaturedEvent[]
  label: string
}

/** Duplicate once so translateX(-50%) loops those events forever. */
function loopEvents(events: FeaturedEvent[]) {
  return [...events, ...events]
}

function metaLine(event: FeaturedEvent) {
  return event.timeLabel ? `${event.dateLabel}, ${event.timeLabel}` : event.dateLabel
}

export function HomeEventsCarousel({ events, label }: HomeEventsCarouselProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  if (!events.length) return null

  const track = reduceMotion ? events : loopEvents(events)

  return (
    <div className="home-events-marquee" aria-label={label}>
      <div
        className={
          reduceMotion
            ? "home-events-marquee__track home-events-marquee__track--static"
            : "home-events-marquee__track"
        }
      >
        {track.map((event, i) => {
          const isOriginal = reduceMotion || i < events.length
          return (
            <Link
              key={`${event.id}-${i}`}
              href="/events"
              className="home-events-tab"
              tabIndex={isOriginal ? 0 : -1}
              aria-hidden={isOriginal ? undefined : true}
            >
              <time dateTime={new Date(event.startMs).toISOString()}>
                {metaLine(event)}
              </time>
              <span className="home-events-tab__title">{event.title}</span>
              {event.location ? (
                <span className="home-events-tab__place">{event.location}</span>
              ) : null}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
