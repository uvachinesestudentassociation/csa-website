"use client"

import {
  useLayoutEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

type RevealOnScrollProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in milliseconds */
  delayMs?: number
  as?: ElementType
}

function isInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  // Already on screen (with a little slack) — never start hidden
  return rect.top < vh - 4 && rect.bottom > 4
}

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
  as: Tag = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null)
  // "plain" = visible, no fade (above the fold / reduced motion)
  // "pending" = below fold, hidden until intersect
  // "shown" = finished fade-in
  const [phase, setPhase] = useState<"plain" | "pending" | "shown">("plain")

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("plain")
      return
    }

    if (isInView(el)) {
      setPhase("plain")
      return
    }

    setPhase("pending")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setPhase("shown")
        observer.disconnect()
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn(
        phase === "pending" && "home-reveal",
        phase === "shown" && "home-reveal is-visible",
        className,
      )}
      style={delayMs && phase !== "plain" ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
