"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { isShirtPreorder } from "@/lib/preorder"
import { storeItemNote, venmoPayUrl } from "@/lib/venmo"

export interface StoreItem {
  id: string
  name: string
  price: number
  description: string
  image: string
  images?: string[]
  sizes?: { label: string; available: number }[]
  comingSoon?: boolean
}

export type StorePurchaseCopy = {
  venmoUsername: string
  purchaseLabel: string
  preorderLabel: string
  preorderUntil: string
  arrivalNote: string
  purchaseCaption: string
  sizeLabel: string
}

function ComingSoonTile() {
  return (
    <article className="store-item store-item--soon" aria-label="Coming soon">
      <div className="store-well store-soon">
        <p>Coming soon</p>
      </div>
    </article>
  )
}

function ProductTile({ item, copy }: { item: StoreItem; copy: StorePurchaseCopy }) {
  const slides = item.images?.length ? item.images : [item.image]
  const sizes = item.sizes ?? []
  const needsSize = sizes.length > 0
  const [size, setSize] = useState("")
  const [index, setIndex] = useState(0)
  const ready = !needsSize || size !== ""
  const selected = sizes.find((option) => option.label === size)
  const preorder = isShirtPreorder(new Date(), copy.preorderUntil)
  const buyLabel = preorder ? copy.preorderLabel : copy.purchaseLabel
  const note = storeItemNote(item.name, needsSize ? size : undefined, preorder)
  const href = venmoPayUrl(copy.venmoUsername, item.price, note)
  const src = slides[index] ?? item.image

  return (
    <article className="store-item">
      <div className={item.id === "stickers" ? "store-well store-well--logo" : "store-well"}>
        <Image
          src={src}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="store-well__img is-current"
        />
        {slides.length > 1 ? (
          <>
            <button
              type="button"
              className="store-arrow store-arrow--prev"
              aria-label="Previous photo"
              onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
            >
              <ChevronLeft aria-hidden />
            </button>
            <button
              type="button"
              className="store-arrow store-arrow--next"
              aria-label="Next photo"
              onClick={() => setIndex((index + 1) % slides.length)}
            >
              <ChevronRight aria-hidden />
            </button>
          </>
        ) : null}
      </div>
      <div className="store-meta">
        <div className="store-heading">
          <h2>{item.name}</h2>
          <p className="store-price">${item.price.toFixed(2)}</p>
        </div>
        {needsSize ? (
          <div className="store-sizes" role="group" aria-label={copy.sizeLabel}>
            {sizes.map((option) => (
              <button
                key={option.label}
                type="button"
                className="store-chip"
                aria-pressed={size === option.label}
                onClick={() => setSize(option.label)}
              >
                {option.label}
              </button>
            ))}
          </div>
        ) : null}
        {ready ? (
          <a className="store-buy" href={href} target="_blank" rel="noopener noreferrer">
            {buyLabel}
            {selected ? <span className="store-buy__count">{selected.available} left</span> : null}
          </a>
        ) : (
          <button type="button" className="store-buy" disabled>
            {buyLabel}
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
        {items.map((item) =>
          item.comingSoon ? (
            <ComingSoonTile key={item.id} />
          ) : (
            <ProductTile key={item.id} item={item} copy={copy} />
          ),
        )}
      </div>
      <p className="store-caption">{copy.purchaseCaption}</p>
    </div>
  )
}
