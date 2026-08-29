"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { previewAssets } from "@/app/animations-preview/assets"
import { cn } from "@/lib/utils"

type MistShift = { x: number; y: number }

type MistCloudOverlayProps = {
  className?: string
  /** Softer blend for photo heroes (default). Use "demo" for the preview stage. */
  tone?: "hero" | "demo"
  /** Fires once when every mist layer has decoded (hero). */
  onReady?: () => void
  /** Optional parallax translate per layer (hero home). */
  shifts?: readonly MistShift[]
}

/**
 * CSS-driven mist. Hero reports ready after all layers decode so the page can
 * reveal mountains + fog together.
 */
export function MistCloudOverlay({
  className,
  tone = "hero",
  onReady,
  shifts,
}: MistCloudOverlayProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const loadedCountRef = useRef(0)
  const notifiedRef = useRef(false)
  const [ready, setReady] = useState(tone !== "hero")
  const layerCount = previewAssets.cloudMistLayers.length

  const markReady = useCallback(() => {
    setReady(true)
    if (!notifiedRef.current) {
      notifiedRef.current = true
      onReady?.()
    }
  }, [onReady])

  const handleImageLoad = useCallback(() => {
    if (tone !== "hero") return
    loadedCountRef.current += 1
    if (loadedCountRef.current >= layerCount) markReady()
  }, [layerCount, markReady, tone])

  useEffect(() => {
    if (tone !== "hero" || ready) return
    const stage = stageRef.current
    if (!stage) return

    const imgs = stage.querySelectorAll("img")
    if (
      imgs.length >= layerCount &&
      Array.from(imgs).every((img) => img.complete && img.naturalWidth > 0)
    ) {
      markReady()
    }
  }, [tone, ready, layerCount, markReady])

  return (
    <div
      ref={stageRef}
      className={cn(
        "mist-cloud-overlay",
        `mist-cloud-overlay--${tone}`,
        ready && "mist-cloud-overlay--ready",
        className
      )}
      aria-hidden
    >
      {previewAssets.cloudMistLayers.map((src, i) => {
        const shift = shifts?.[i] ?? { x: 0, y: 0 }
        return (
          <div
            key={src}
            className={`mist-cloud-layer mist-cloud-layer--${i}`}
            style={{ transform: `translate(${shift.x}px, ${shift.y}px)` }}
          >
            <div className="mist-cloud-layer__drift">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                decoding="async"
                fetchPriority={tone === "hero" ? "high" : "auto"}
                className="mist-cloud-layer__img"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
