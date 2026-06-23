import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GalleryList } from "@/components/gallery-list"
import galleryItems from "./gallery-data.json"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from CSA@UVA's 2025–2026 events and activities.",
}

export default function GalleryPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Gallery</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Photos from our 2025–2026 events and activities.
        </p>
      </div>

      <GalleryList items={galleryItems} />

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/gallery/archive">View Archive</Link>
        </Button>
      </div>
    </div>
  )
}
