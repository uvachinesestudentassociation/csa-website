"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { MistCloudOverlay } from "@/components/mist-cloud-overlay"
import { cn } from "@/lib/utils"

/** Mountains + mist fade in together once both are decoded — no bright-then-muddy flash. */
export function HomeHeroMedia() {
  const [mountainsReady, setMountainsReady] = useState(false)
  const [mistReady, setMistReady] = useState(false)
  const mountainsRef = useRef<HTMLImageElement>(null)
  const ready = mountainsReady && mistReady

  useEffect(() => {
    const img = mountainsRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setMountainsReady(true)
    }
  }, [])

  const onMountainsLoad = useCallback(() => {
    setMountainsReady(true)
  }, [])

  const onMistReady = useCallback(() => {
    setMistReady(true)
  }, [])

  return (
    <>
      <div
        className={cn("home-photo-fold__mountains", ready && "is-ready")}
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={mountainsRef}
          src="/images/mountains.png"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="home-photo-fold__mountains-img"
          onLoad={onMountainsLoad}
          onError={onMountainsLoad}
        />
      </div>
      <div
        className={cn("home-photo-fold__mist", ready && "is-ready")}
        aria-hidden
      >
        <MistCloudOverlay tone="hero" onReady={onMistReady} />
      </div>
    </>
  )
}
