import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { StoreLayoutLab } from "@/components/store-layout-lab"
import { storeMockEnabled, storePurchaseCopy } from "@/content/store"
import items from "../store-data.json"

export const metadata: Metadata = {
  title: "Store layouts",
  robots: { index: false, follow: false },
}

export default function StoreLayoutPreviewPage() {
  if (!storeMockEnabled) notFound()

  return (
    <div className="container-custom store-page">
      <p className="lab-back">
        <Link href="/store">Back to store</Link>
      </p>
      <StoreLayoutLab items={items} copy={storePurchaseCopy} />
    </div>
  )
}
