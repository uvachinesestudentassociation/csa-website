"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { StoreItem, StorePurchaseCopy } from "@/components/store-grid"
import { storeItemNote, venmoPayUrl } from "@/lib/venmo"

const layouts = [
  {
    id: "rail",
    name: "1 Fitting rail",
    mood: "Night lookbook. One garment fills the stage. The rest is a rack.",
  },
  {
    id: "list",
    name: "2 Price list",
    mood: "Printed program. Names and prices first, photo as the plate.",
  },
  {
    id: "labels",
    name: "3 Garment labels",
    mood: "Three care tags. Photo on top, name and price sewn underneath.",
  },
] as const

type LayoutId = (typeof layouts)[number]["id"]

function slidesOf(item: StoreItem) {
  return item.images?.length ? item.images : [item.image]
}

function indexLabel(n: number) {
  return String(n + 1).padStart(2, "0")
}

function PhotoStage({
  item,
  className,
}: {
  item: StoreItem
  className?: string
}) {
  const slides = slidesOf(item)
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setIndex(0)
  }, [item.id])

  function close() {
    setOpen(false)
    setIndex(0)
  }

  function go(next: number) {
    setIndex((next + slides.length) % slides.length)
  }

  return (
    <div
      className={className}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
    >
      <div className={open ? "store-item is-open" : "store-item"}>
        <div className={item.id === "stickers" ? "store-well store-well--logo" : "store-well"}>
          {slides.map((src, slide) => (
            <Image
              key={`${item.id}-${slide}`}
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={slide === index ? "store-well__img is-current" : "store-well__img"}
            />
          ))}
          {slides.length > 1 ? (
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
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function BuyRow({ item, copy }: { item: StoreItem; copy: StorePurchaseCopy }) {
  const sizes = item.sizes ?? []
  const needsSize = sizes.length > 0
  const [size, setSize] = useState("")
  const ready = !needsSize || size !== ""
  const href = venmoPayUrl(
    copy.venmoUsername,
    item.price,
    storeItemNote(item.name, needsSize ? size : undefined),
  )

  return (
    <div className="lab-buy">
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
  )
}

function FittingRail({ items, copy }: { items: StoreItem[]; copy: StorePurchaseCopy }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")
  const active = items.find((item) => item.id === activeId) ?? items[0]
  if (!active) return null

  const activeIndex = Math.max(0, items.findIndex((item) => item.id === active.id))

  return (
    <div className="lab-rail">
      <div className="lab-rail__stage">
        <p className="lab-rail__index" aria-hidden>
          {indexLabel(activeIndex)}
        </p>
        <PhotoStage item={active} />
        <p className="lab-rail__name">{active.name}</p>
      </div>
      <div className="lab-rail__slips">
        <p className="lab-kicker">On the rack</p>
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={item.id === active.id ? "lab-slip is-active" : "lab-slip"}
            aria-current={item.id === active.id ? "true" : undefined}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => setActiveId(item.id)}
          >
            <span className="lab-idx">{indexLabel(index)}</span>
            <span>{item.name}</span>
            <span>${item.price.toFixed(0)}</span>
          </button>
        ))}
        <BuyRow key={active.id} item={active} copy={copy} />
      </div>
    </div>
  )
}

function PriceList({ items, copy }: { items: StoreItem[]; copy: StorePurchaseCopy }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "")
  const active = items.find((item) => item.id === activeId) ?? items[0]
  if (!active) return null

  const activeIndex = Math.max(0, items.findIndex((item) => item.id === active.id))

  return (
    <div className="lab-list">
      <div className="lab-ticket">
        <p className="lab-kicker">Program</p>
        <ul className="lab-lines">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                className={item.id === active.id ? "lab-line is-active" : "lab-line"}
                aria-current={item.id === active.id ? "true" : undefined}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
              >
                <span className="lab-idx">{indexLabel(index)}</span>
                <span>{item.name}</span>
                <span className="lab-line__rule" aria-hidden />
                <span className="lab-line__price">${item.price.toFixed(2)}</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="lab-ticket__note">
          {indexLabel(activeIndex)} — {active.description}
        </p>
        <BuyRow key={active.id} item={active} copy={copy} />
      </div>
      <figure className="lab-list__stage">
        <PhotoStage item={active} />
        <figcaption>
          {indexLabel(activeIndex)} / {active.name}
        </figcaption>
      </figure>
    </div>
  )
}

function GarmentLabels({ items, copy }: { items: StoreItem[]; copy: StorePurchaseCopy }) {
  return (
    <div className="lab-labels">
      {items.map((item, index) => (
        <article key={item.id} className="lab-label">
          <p className="lab-label__edge" aria-hidden>
            CSA
          </p>
          <PhotoStage item={item} />
          <div className="lab-label__text">
            <p className="lab-kicker">{indexLabel(index)}</p>
            <h2>{item.name}</h2>
            <p className="lab-label__price">${item.price.toFixed(2)}</p>
            <BuyRow item={item} copy={copy} />
          </div>
        </article>
      ))}
    </div>
  )
}

export function StoreLayoutLab({
  items,
  copy,
}: {
  items: StoreItem[]
  copy: StorePurchaseCopy
}) {
  const [layout, setLayout] = useState<LayoutId>("rail")
  const current = layouts.find((option) => option.id === layout) ?? layouts[0]

  return (
    <div className={`lab lab-theme--${layout}`}>
      <p className="lab-note">Temporary. Three themes, same merch. Pick the one you want on the store.</p>
      <div className="lab-switch" role="tablist" aria-label="Store themes">
        {layouts.map((option) => (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={layout === option.id}
            className={layout === option.id ? "lab-switch__btn is-active" : "lab-switch__btn"}
            onClick={() => setLayout(option.id)}
          >
            {option.name}
          </button>
        ))}
      </div>
      <p className="lab-mood">{current.mood}</p>
      {layout === "rail" ? <FittingRail items={items} copy={copy} /> : null}
      {layout === "list" ? <PriceList items={items} copy={copy} /> : null}
      {layout === "labels" ? <GarmentLabels items={items} copy={copy} /> : null}
    </div>
  )
}
