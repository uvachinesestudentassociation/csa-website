import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { StoreArrivalNote } from "@/components/store-arrival-note"
import { StoreGrid } from "@/components/store-grid"
import { storeContent, storeMockEnabled, storePurchaseCopy } from "@/content/store"
import items from "./store-data.json"

export const metadata: Metadata = {
  title: storeContent.meta.title,
  description: storeContent.meta.description,
  robots: { index: false, follow: false },
}

export default function StorePage() {
  if (!storeMockEnabled) notFound()

  const { intro } = storeContent

  return (
    <div className="container-custom store-page">
      <header className="store-opener">
        <Image
          src="/images/graphics/store-border.png"
          alt=""
          width={800}
          height={450}
          className="store-opener__mark"
          aria-hidden
        />
        <div className="store-opener__title">
          <h1>{intro.title}</h1>
          <StoreArrivalNote
            until={storePurchaseCopy.preorderUntil}
            note={storePurchaseCopy.arrivalNote}
          />
        </div>
        <Image
          src="/images/graphics/store-border.png"
          alt=""
          width={800}
          height={450}
          className="store-opener__mark store-opener__mark--end"
          aria-hidden
        />
      </header>
      <StoreGrid items={items} copy={storePurchaseCopy} />
    </div>
  )
}
