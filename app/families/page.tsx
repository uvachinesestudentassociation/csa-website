"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { animate, stagger } from "animejs"
import { familiesContent } from "@/content/families"
import families from "./families-data.json"

const isDev = process.env.NODE_ENV === "development"

const SCENE_SEALED = "/images/families-roadside-sealed.png"
const SCENE_OPEN = "/images/families-roadside-open.png"

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

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export default function FamiliesPage() {
  const { intro, sealed, card, revealed: contentRevealed } = familiesContent
  const [devPreviewRevealed, setDevPreviewRevealed] = useState(false)
  const revealed = contentRevealed || (isDev && devPreviewRevealed)
  const [photosMounted, setPhotosMounted] = useState(revealed)
  const didMount = useRef(false)

  useEffect(() => {
    if (revealed) setPhotosMounted(true)
  }, [revealed])

  useEffect(() => {
    const sealedLayer = document.querySelector<HTMLElement>("[data-roadside-sealed]")
    const photos = document.querySelectorAll<HTMLElement>("[data-roadside-photo]")
    const copy = document.querySelectorAll<HTMLElement>("[data-roadside-copy]")
    const scene = document.querySelector<HTMLElement>("[data-palace-courtyard]")

    if (!scene) return

    const snap = () => {
      scene.style.opacity = "1"
      if (sealedLayer) sealedLayer.style.opacity = revealed ? "0" : "1"
      photos.forEach((el) => {
        el.style.opacity = revealed ? "1" : "0"
      })
      copy.forEach((el) => {
        el.style.opacity = revealed ? "1" : "0"
      })
    }

    if (!didMount.current) {
      didMount.current = true
      snap()
      return
    }

    if (prefersReducedMotion()) {
      snap()
      if (!revealed) setPhotosMounted(false)
      return
    }

    scene.style.opacity = "1"

    if (revealed) {
      if (sealedLayer) {
        animate(sealedLayer, {
          opacity: [1, 0],
          duration: 720,
          ease: "inOutCubic",
        })
      }
      if (photos.length) {
        animate(photos, {
          opacity: [0, 1],
          scale: [0.92, 1],
          delay: stagger(90, { start: 180 }),
          duration: 640,
          ease: "outExpo",
        })
      }
      if (copy.length) {
        animate(copy, {
          opacity: [0, 1],
          delay: stagger(90, { start: 280 }),
          duration: 500,
          ease: "outQuad",
        })
      }
      return
    }

    if (sealedLayer) {
      animate(sealedLayer, {
        opacity: [0, 1],
        duration: 480,
        ease: "outCubic",
      })
    }
    if (photos.length || copy.length) {
      animate([...photos, ...copy], {
        opacity: 0,
        duration: 280,
        ease: "inQuad",
        onComplete: () => setPhotosMounted(false),
      })
    } else {
      setPhotosMounted(false)
    }
  }, [revealed, photosMounted])

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
        <h1 className="palace-proclamation__title">{intro.title}</h1>
        <p className="palace-proclamation__body">{intro.body}</p>
      </section>

      <section
        className="roadside"
        aria-label={revealed ? "This year's families" : "Sealed family doors"}
        data-palace-courtyard
      >
        <figure className="roadside__scene">
          <Image
            src={SCENE_OPEN}
            alt={revealed ? sealed.sceneOpenAlt : ""}
            width={1600}
            height={900}
            priority
            className="roadside__art"
          />
          <Image
            src={SCENE_SEALED}
            alt={revealed ? "" : sealed.sceneSealedAlt}
            width={1600}
            height={900}
            priority
            className="roadside__art roadside__art--sealed"
            data-roadside-sealed
          />

          <ul
            className={
              photosMounted
                ? "roadside__openings"
                : "roadside__openings roadside__openings--sealed"
            }
          >
            {photosMounted
              ? familyList.map((family) => (
                  <li key={family.id} className="roadside__opening">
                    <div className="roadside__opening-frame">
                      <Image
                        src={family.image || "/placeholder.svg"}
                        alt={`${family.name} family photo`}
                        fill
                        sizes="(max-width: 768px) 22vw, 12vw"
                        className="roadside__opening-photo"
                        data-roadside-photo
                      />
                    </div>
                    <div className="roadside__opening-copy" data-roadside-copy>
                      <h2>{family.name}</h2>
                      <p>{family.description}</p>
                      <a
                        href={family.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-4 w-4" aria-hidden="true" />
                        <span>{card.instagramLabel}</span>
                      </a>
                    </div>
                  </li>
                ))
              : Array.from({ length: gateCount }, (_, index) => (
                  <li key={index} className="roadside__opening">
                    <span className="sr-only">{sealed.a11yLabel}</span>
                  </li>
                ))}
          </ul>
        </figure>
      </section>
    </div>
  )
}
