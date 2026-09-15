"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { storeItemNote, venmoPayUrl } from "@/lib/venmo"

export interface StoreItem {
  id: string
  name: string
  price: number
  description: string
  image: string
  images?: string[]
  sizes?: string[]
}

export type StorePurchaseCopy = {
  venmoUsername: string
  purchaseLabel: string
  purchaseCaption: string
  sizeLabel: string
}

function ProductTile({ item, copy }: { item: StoreItem; copy: StorePurchaseCopy }) {
  const slides = item.images?.length ? item.images : [item.image]
  const sizes = item.sizes ?? []
  const needsSize = sizes.length > 0
  const [size, setSize] = useState("")
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const ready = !needsSize || size !== ""
  const note = storeItemNote(item.name, needsSize ? size : undefined)
  const href = venmoPayUrl(copy.venmoUsername, item.price, note)
  const hasGallery = slides.length > 1

  function closeGallery() {
    setOpen(false)
    setIndex(0)
  }

  function go(next: number) {
    setIndex((next + slides.length) % slides.length)
  }

  return (
    <article
      className={open ? "store-item is-open" : "store-item"}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={closeGallery}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeGallery()
      }}
    >
      <div className="store-well">
        {slides.map((src, slide) => (
          <Image
            key={`${item.id}-${slide}`}
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 25vw"
            className={slide === index ? "store-well__img is-current" : "store-well__img"}
          />
        ))}
        {hasGallery ? (
          <div className="store-gallery">
            <button
              type="button"
              className="store-gallery__step store-gallery__step--prev"
              aria-label="Previous photo"
              onClick={() => go(index - 1)}
            >
              <ChevronLeft aria-hidden />
            </button>
            <button
              type="button"
              className="store-gallery__step store-gallery__step--next"
              aria-label="Next photo"
              onClick={() => go(index + 1)}
            >
              <ChevronRight aria-hidden />
            </button>
            <div className="store-gallery__dots" role="tablist" aria-label={`${item.name} photos`}>
              {slides.map((src, slide) => (
                <button
                  key={`${item.id}-dot-${slide}`}
                  type="button"
                  role="tab"
                  className="store-gallery__dot"
                  aria-selected={slide === index}
                  aria-label={`Photo ${slide + 1} of ${slides.length}`}
                  onClick={() => setIndex(slide)}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="store-meta">
        <h2>{item.name}</h2>
        <p className="store-price">${item.price.toFixed(2)}</p>
        {needsSize ? (
          <div className="store-sizes" role="group" aria-label={copy.sizeLabel}>
            {sizes.map((option) => (
              <button
                key={option}
                type="button"
                className="store-chip"
                aria-pressed={size === option}
                onClick={() => setSize(option)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}
        {ready ? (
          <a className="store-buy" href={href} target="_blank" rel="noopener noreferrer">
            {copy.purchaseLabel}
          </a>
        ) : (
          <button type="button" className="store-buy" disabled>
            {copy.purchaseLabel}
          </button>
        )}
      </div>
    </article>
  )
}

export function StoreGrid({ items, copy }: { items: StoreItem[]; copy: StorePurchaseCopy }) {
  return (
    <div className="store-catalog">
      <div className="store-grid">
        {items.map((item) => (
          <ProductTile key={item.id} item={item} copy={copy} />
        ))}
      </div>
      <p className="store-caption">{copy.purchaseCaption}</p>
    </div>
  )
}
