"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { animate, createTimeline, stagger } from "animejs"
import { MistCloudOverlay } from "@/components/mist-cloud-overlay"
import { previewAssets } from "./assets"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function DemoCard({
  title,
  note,
  onReplay,
  children,
}: {
  title: string
  note: string
  onReplay: () => void
  children: ReactNode
}) {
  return (
    <article className="anim-preview__card">
      <div className="anim-preview__card-head">
        <div>
          <h2 className="anim-preview__card-title">{title}</h2>
          <p className="anim-preview__card-note">{note}</p>
        </div>
        <button type="button" className="anim-preview__replay" onClick={onReplay}>
          Replay
        </button>
      </div>
      {children}
    </article>
  )
}

function PlumPetalsDemo({ replayKey }: { replayKey: number }) {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const petals = stage.querySelectorAll<HTMLElement>(".anim-petal")
    if (prefersReducedMotion()) {
      petals.forEach((el) => {
        el.style.opacity = "0.9"
        el.style.transform = "translateY(140px) rotate(20deg)"
      })
      return
    }

    const anim = animate(petals, {
      y: [0, 210],
      x: (_el, i) => {
        const idx = i ?? 0
        return [0, (idx % 2 === 0 ? 1 : -1) * (18 + idx * 5)]
      },
      rotate: (_el, i) => {
        const idx = i ?? 0
        return [-15, 100 + idx * 20]
      },
      opacity: [0, 1, 0.85, 0],
      duration: 3200,
      delay: stagger(180, { start: 80 }),
      ease: "inOutSine",
      loop: true,
    })

    return () => {
      anim.pause()
      anim.revert()
    }
  }, [replayKey])

  return (
    <div ref={stageRef} className="anim-preview__stage anim-preview__stage--petals" aria-hidden>
      {Array.from({ length: 9 }, (_, i) => (
        <span
          key={i}
          className="anim-petal"
          style={{ left: `${6 + i * 10}%`, width: `${22 + (i % 3) * 6}px` }}
        >
          <Image
            src={previewAssets.plumPetal}
            alt=""
            width={48}
            height={48}
            className="anim-petal__img"
            unoptimized
          />
        </span>
      ))}
    </div>
  )
}

function CloudDriftDemo({ replayKey }: { replayKey: number }) {
  return (
    <div className="anim-preview__stage anim-preview__stage--clouds" aria-hidden>
      {/* key remounts overlay so Replay restarts CSS drift */}
      <MistCloudOverlay key={replayKey} tone="demo" />
    </div>
  )
}

function InkBlossomDemo({ replayKey }: { replayKey: number }) {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const art = stage.querySelector<HTMLElement>(".anim-blossom")
    const wash = stage.querySelector<HTMLElement>(".anim-blossom-wash")
    if (!art || !wash) return

    if (prefersReducedMotion()) {
      art.style.opacity = "1"
      art.style.transform = "scale(1)"
      wash.style.opacity = "0.35"
      return
    }

    art.style.opacity = "0"
    art.style.transform = "scale(1.08) translateY(12px)"
    wash.style.opacity = "0"

    const tl = createTimeline({ defaults: { ease: "outCubic" } })

    tl.add(wash, {
      opacity: [0, 0.4],
      scale: [1.2, 1],
      duration: 700,
    })
      .add(
        art,
        {
          opacity: [0, 1],
          scale: [1.08, 1],
          y: [12, 0],
          duration: 900,
        },
        "-=350",
      )
      .add(art, {
        y: [0, -4, 0],
        duration: 2800,
        ease: "inOutSine",
        loop: true,
      })

    return () => {
      tl.pause()
      tl.revert()
    }
  }, [replayKey])

  return (
    <div ref={stageRef} className="anim-preview__stage anim-preview__stage--blossom" aria-hidden>
      <div className="anim-blossom-wash" />
      <div className="anim-blossom">
        <Image
          src={previewAssets.inkBlossom}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 40vw"
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  )
}

function LanternGlowDemo({ replayKey }: { replayKey: number }) {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const lanterns = stage.querySelectorAll<HTMLElement>(".anim-lantern")
    const glows = stage.querySelectorAll<HTMLElement>(".anim-lantern__glow")

    if (prefersReducedMotion()) {
      lanterns.forEach((el) => {
        el.style.transform = "rotate(0deg)"
      })
      return
    }

    const sway = animate(lanterns, {
      rotate: (_el, i) => {
        const idx = i ?? 0
        return [`${-5 - idx}deg`, `${5 + idx}deg`]
      },
      duration: 2200,
      delay: stagger(180),
      ease: "inOutSine",
      alternate: true,
      loop: true,
    })

    const glow = animate(glows, {
      opacity: [0.35, 0.85],
      scale: [0.9, 1.15],
      duration: 1600,
      delay: stagger(200),
      ease: "inOutQuad",
      alternate: true,
      loop: true,
    })

    return () => {
      sway.pause()
      glow.pause()
      sway.revert()
      glow.revert()
    }
  }, [replayKey])

  return (
    <div ref={stageRef} className="anim-preview__stage" aria-hidden>
      {[22, 48, 74].map((left, i) => (
        <div key={i} className="anim-lantern" style={{ left: `${left}%` }}>
          <span className="anim-lantern__cord" />
          <span className="anim-lantern__glow" />
          <span className="anim-lantern__body" />
        </div>
      ))}
    </div>
  )
}

export function AnimationsPreviewDemos() {
  const [keys, setKeys] = useState({
    petals: 0,
    clouds: 0,
    blossom: 0,
    lanterns: 0,
  })

  const bump = (id: keyof typeof keys) => {
    setKeys((prev) => ({ ...prev, [id]: prev[id] + 1 }))
  }

  return (
    <div className="anim-preview">
      <header className="anim-preview__header">
        <p className="anim-preview__eyebrow">Test playground · anime.js v4 · AI assets</p>
        <h1 className="anim-preview__title">Traditional Chinese motion tests</h1>
        <p className="anim-preview__lede">
          Temporary demos using AI-generated plum petals, mist clouds, and ink blossom art.
          Open <code>/animations-preview</code> directly. Respects reduced motion.
        </p>
      </header>

      <div className="anim-preview__grid">
        <DemoCard
          title="Plum petal fall"
          note="AI petal sprites · stagger loop"
          onReplay={() => bump("petals")}
        >
          <PlumPetalsDemo replayKey={keys.petals} />
        </DemoCard>

        <DemoCard
          title="Mist clouds"
          note="3 distinct AI mists · slow random drift"
          onReplay={() => bump("clouds")}
        >
          <CloudDriftDemo replayKey={keys.clouds} />
        </DemoCard>

        <DemoCard
          title="Ink blossom"
          note="AI meihua wash · reveal + float"
          onReplay={() => bump("blossom")}
        >
          <InkBlossomDemo replayKey={keys.blossom} />
        </DemoCard>

        <DemoCard
          title="Lantern glow"
          note="CSS lanterns · sway + pulse"
          onReplay={() => bump("lanterns")}
        >
          <LanternGlowDemo replayKey={keys.lanterns} />
        </DemoCard>
      </div>
    </div>
  )
}
