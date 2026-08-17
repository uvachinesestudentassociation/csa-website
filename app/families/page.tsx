"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { animate, stagger } from "animejs"
import { familiesContent } from "@/content/families"
import families from "./families-data.json"

const isDev = process.env.NODE_ENV === "development"

interface Family {
  id: string
  name: string
  shortTabLabel: string
  image: string
  instagramUrl: string
  description: string
}

const familyList = families as Family[]
const gateCount = familyList.length

function gateOrdinal(index: number): string {
  const { gateOrdinals } = familiesContent.sealed
  return gateOrdinals[index] ?? `門 ${index + 1}`
}

function SealedGate({ index }: { index: number }) {
  const { sealed } = familiesContent

  return (
    <article
      className="palace-gate"
      aria-label={sealed.a11yLabel}
      data-palace-gate
    >
      <div className="palace-gate__roof" aria-hidden="true" />
      <div className="palace-gate__door">
        <p className="palace-gate__ordinal">{gateOrdinal(index)}</p>
        <div className="palace-gate__plaque">
          <span className="sr-only">{sealed.a11yLabel}</span>
          <span className="palace-gate__redaction" aria-hidden="true" data-palace-redaction />
          <span className="palace-gate__redaction palace-gate__redaction--short" aria-hidden="true" data-palace-redaction />
        </div>
        <p className="palace-gate__hint">{sealed.plaqueHint}</p>
      </div>
    </article>
  )
}

function RevealedGate({ family, index }: { family: Family; index: number }) {
  const { card } = familiesContent

  return (
    <article className="palace-gate palace-gate--revealed" data-palace-gate>
      <div className="palace-gate__roof" aria-hidden="true" />
      <div className="palace-gate__door palace-gate__door--open">
        <p className="palace-gate__ordinal">{gateOrdinal(index)}</p>
        <div className="palace-gate__media">
          <Image
            src={family.image || "/placeholder.svg"}
            alt={`${family.name} family photo`}
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="palace-gate__photo"
          />
        </div>
        <h2 className="palace-gate__name">{family.name}</h2>
        <p className="palace-gate__bio">{family.description}</p>
        <a
          href={family.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="palace-gate__ig"
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
          <span>{card.instagramLabel}</span>
        </a>
      </div>
    </article>
  )
}

function usePalaceEntrance(resetKey: string) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      document
        .querySelectorAll<HTMLElement>(
          "[data-palace-gate], [data-palace-redaction], [data-palace-courtyard]"
        )
        .forEach((el) => {
          el.style.opacity = "1"
          el.style.transform = "none"
          el.style.width = ""
        })
      return
    }

    animate("[data-palace-courtyard]", {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 700,
      ease: "outExpo",
    })

    animate("[data-palace-gate]", {
      opacity: [0, 1],
      translateY: [48, 0],
      delay: stagger(140, { start: 180 }),
      duration: 820,
      ease: "outExpo",
    })

    animate("[data-palace-redaction]", {
      scaleX: [0, 1],
      opacity: [0, 1],
      delay: stagger(80, { start: 520 }),
      duration: 480,
      ease: "outCubic",
    })
  }, [resetKey])
}

export default function FamiliesPage() {
  const { intro, sealed, revealed: contentRevealed } = familiesContent
  const [devPreviewRevealed, setDevPreviewRevealed] = useState(false)
  const revealed = contentRevealed || (isDev && devPreviewRevealed)
  const courtyardKey = revealed ? "revealed" : "sealed"

  usePalaceEntrance(courtyardKey)

  return (
    <div className="palace-families">
      {isDev && (
        <div className="palace-dev-toggle">
          <button
            type="button"
            className="palace-dev-toggle__button"
            aria-pressed={devPreviewRevealed}
            onClick={() => setDevPreviewRevealed((value) => !value)}
          >
            Dev: {devPreviewRevealed ? "Showing revealed" : "Showing sealed"}
          </button>
          {contentRevealed && (
            <p className="palace-dev-toggle__note">
              content.revealed is already true
            </p>
          )}
        </div>
      )}

      <section className="palace-proclamation container-custom">
        {!revealed && (
          <p className="palace-proclamation__eyebrow">{sealed.eyebrow}</p>
        )}
        <h1 className="palace-proclamation__title">{intro.title}</h1>
        <p className="palace-proclamation__body">{intro.body}</p>
      </section>

      <section
        key={courtyardKey}
        className="palace-courtyard"
        aria-label={revealed ? "This year's families" : "Sealed family gates"}
        data-palace-courtyard
      >
        <div className="palace-courtyard__atmosphere" aria-hidden="true" />
        <div className="palace-courtyard__gates">
          {revealed
            ? familyList.map((family, index) => (
                <RevealedGate key={family.id} family={family} index={index} />
              ))
            : Array.from({ length: gateCount }, (_, index) => (
                <SealedGate key={index} index={index} />
              ))}
        </div>
      </section>
    </div>
  )
}
