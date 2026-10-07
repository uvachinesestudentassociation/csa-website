import type { Metadata } from "next"
import { notFound } from "next/navigation"
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
        <h1>{intro.title}</h1>
        <p>{intro.body}</p>
      </header>
      <StoreGrid items={items} copy={storePurchaseCopy} />
    </div>
  )
}
