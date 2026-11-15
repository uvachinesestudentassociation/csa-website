"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useId, useRef, useState } from "react"
import {
  spotlightDismissKey,
  type SpotlightEvent,
} from "@/content/spotlight-event"
import {
  getCountdownParts,
  pad2,
  type CountdownParts,
} from "@/lib/countdown"

type HomeSpotlightDialogProps = {
  event: SpotlightEvent
}

/** Stable SSR/hydration placeholder — live values fill in after mount. */
const CLOCK_PLACEHOLDER: CountdownParts = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  done: false,
}

export function HomeSpotlightDialog({ event }: HomeSpotlightDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const target = useRef(new Date(event.startsAt))
  const [parts, setParts] = useState<CountdownParts>(CLOCK_PLACEHOLDER)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dismissed =
      window.localStorage.getItem(spotlightDismissKey(event.id)) === "1"
    const initial = getCountdownParts(new Date(), target.current)
    if (dismissed || initial.done) return

    setParts(initial)

    const dialog = dialogRef.current
    if (!dialog) return

    const showTimer = window.setTimeout(() => {
      dialog.showModal()
      setOpen(true)
    }, 480)

    return () => window.clearTimeout(showTimer)
  }, [event.id])

  useEffect(() => {
    if (!open) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const tickMs = reduceMotion ? 60_000 : 1000

    const tick = () => {
      const next = getCountdownParts(new Date(), target.current)
      setParts(next)
      if (next.done) {
        dialogRef.current?.close()
        setOpen(false)
      }
    }

    tick()
    const id = window.setInterval(tick, tickMs)
    return () => window.clearInterval(id)
  }, [open])

  function dismiss() {
    try {
      window.localStorage.setItem(spotlightDismissKey(event.id), "1")
    } catch {
      // ignore quota / private mode
    }
    dialogRef.current?.close()
    setOpen(false)
  }

  const meta = [event.dateLabel, event.venueLine].filter(Boolean).join(" · ")

  return (
    <dialog
      ref={dialogRef}
      className="home-spotlight"
      aria-labelledby={titleId}
      onCancel={(e) => {
        e.preventDefault()
        dismiss()
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) dismiss()
      }}
    >
      <div className="home-spotlight__panel">
        <button
          type="button"
          className="home-spotlight__close"
          onClick={dismiss}
          aria-label={event.closeLabel}
        >
          ×
        </button>

        <div className="home-spotlight__art">
          {event.artSrc ? (
            <Image
              src={event.artSrc}
              alt={event.artAlt}
              width={960}
              height={540}
              className="home-spotlight__art-img"
              priority
            />
          ) : (
            <span className="home-spotlight__art-label">{event.artLabel}</span>
          )}
        </div>

        <div className="home-spotlight__body">
          {meta ? <p className="home-spotlight__meta">{meta}</p> : null}

          <h2 id={titleId} className="home-spotlight__title">
            {event.name}
          </h2>

          <div className="home-spotlight__clock" aria-live="polite">
            {(
              [
                ["days", parts.days, false],
                ["hrs", parts.hours, true],
                ["min", parts.minutes, true],
                ["sec", parts.seconds, true],
              ] as const
            ).map(([label, value, padded], i) => (
              <div key={label} className="home-spotlight__unit">
                {i > 0 ? (
                  <span className="home-spotlight__sep" aria-hidden>
                    :
                  </span>
                ) : null}
                <span className="home-spotlight__value">
                  {padded ? pad2(value) : value}
                </span>
                <span className="home-spotlight__unit-label">{label}</span>
              </div>
            ))}
          </div>

          <Link href={event.ctaHref} className="home-spotlight__cta" onClick={dismiss}>
            {event.ctaLabel}
          </Link>
        </div>
      </div>
    </dialog>
  )
}
