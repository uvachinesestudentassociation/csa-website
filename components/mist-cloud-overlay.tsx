"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { animate } from "animejs"
import { previewAssets } from "@/app/animations-preview/assets"
import { cn } from "@/lib/utils"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

type MistCloudOverlayProps = {
  className?: string
  /** Softer blend for photo heroes (default). Use "demo" for the preview stage. */
  tone?: "hero" | "demo"
}

export function MistCloudOverlay({
  className,
  tone = "hero",
}: MistCloudOverlayProps) {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const layers = stage.querySelectorAll<HTMLElement>(".mist-cloud-layer")
    if (prefersReducedMotion()) {
      layers.forEach((el) => {
        el.style.transform = "translate(0, 0)"
      })
      return
    }

    const rnd = (min: number, max: number) => min + Math.random() * (max - min)
    const sign = () => (Math.random() < 0.5 ? -1 : 1)

    const driftPath = (spread: number) => {
      const a = sign() * rnd(spread * 0.45, spread)
      const b = -sign() * rnd(spread * 0.5, spread * 1.15)
      const c = sign() * rnd(spread * 0.25, spread * 0.7)
      return ["0%", `${a}%`, `${b}%`, `${c}%`, "0%"]
    }

    const verticalPath = (spread: number) => {
      const a = sign() * rnd(spread * 0.3, spread)
      const b = -sign() * rnd(spread * 0.35, spread * 1.1)
      return ["0%", `${a}%`, `${b}%`, "0%"]
    }

    const anims = [
      animate(layers[0], {
        x: driftPath(10),
        y: verticalPath(2.5),
        duration: rnd(38000, 48000),
        ease: "inOutSine",
        loop: true,
      }),
      animate(layers[1], {
        x: driftPath(14),
        y: verticalPath(3.5),
        opacity: tone === "hero" ? [0.35, 0.55, 0.4, 0.6, 0.35] : [0.55, 0.85, 0.6, 0.9, 0.55],
        duration: rnd(28000, 38000),
        ease: "inOutSine",
        loop: true,
      }),
      animate(layers[2], {
        x: driftPath(16),
        y: verticalPath(4),
        scale: [1.04, 1.1, 1.05, 1.12, 1.04],
        opacity: tone === "hero" ? [0.2, 0.4, 0.25, 0.45, 0.2] : [0.35, 0.55, 0.4, 0.6, 0.35],
        duration: rnd(42000, 56000),
        ease: "inOutSine",
        loop: true,
      }),
    ]

    return () => {
      anims.forEach((anim) => {
        anim.pause()
        anim.revert()
      })
    }
  }, [tone])

  return (
    <div
      ref={stageRef}
      className={cn("mist-cloud-overlay", `mist-cloud-overlay--${tone}`, className)}
      aria-hidden
    >
      {previewAssets.cloudMistLayers.map((src, i) => (
        <div key={src} className={`mist-cloud-layer mist-cloud-layer--${i}`}>
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
            priority={tone === "hero" && i === 0}
          />
        </div>
      ))}
    </div>
  )
}
