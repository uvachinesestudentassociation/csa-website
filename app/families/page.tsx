"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
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

export default function FamiliesPage() {
  const { intro, sealed, card, revealed: contentRevealed } = familiesContent
  const [devPreviewRevealed, setDevPreviewRevealed] = useState(false)
  const revealed = contentRevealed || (isDev && devPreviewRevealed)
  const [photosMounted, setPhotosMounted] = useState(revealed)

  useEffect(() => {
    if (revealed) {
      setPhotosMounted(true)
      return
    }

    const hide = window.setTimeout(() => setPhotosMounted(false), 700)
    return () => window.clearTimeout(hide)
  }, [revealed])

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
      >
        <figure className="roadside__scene">
          <Image
            src={SCENE_OPEN}
            alt=""
            width={1600}
            height={900}
            priority
            className="roadside__art"
          />
          <Image
            src={SCENE_SEALED}
            alt={sealed.sceneSealedAlt}
            width={1600}
            height={900}
            priority
            className={
              revealed
                ? "roadside__art roadside__art--sealed is-open"
                : "roadside__art roadside__art--sealed"
            }
          />

          <ul
            className={
              revealed
                ? "roadside__openings is-shown"
                : "roadside__openings"
            }
          >
            {photosMounted
              ? familyList.map((family, index) => (
                  <li
                    key={family.id}
                    className="roadside__opening"
                    style={{ "--roadside-stagger": `${index * 90}ms` } as React.CSSProperties}
                  >
                    <div className="roadside__portrait">
                      <div className="roadside__opening-frame">
                        <Image
                          src={family.image || "/placeholder.svg"}
                          alt={`${family.name} family photo`}
                          width={800}
                          height={800}
                          sizes="(max-width: 768px) 28vw, 14vw"
                          className="roadside__opening-photo"
                        />
                      </div>
                      <div className="roadside__opening-copy">
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
