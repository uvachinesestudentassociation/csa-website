import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from CSA@UVA's 2025–2026 events and activities.",
}
import { Button } from "@/components/ui/button"
import galleryItems from "./gallery-data.json"

export default function GalleryPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Gallery</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Photos from our 2025–2026 events and activities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <Button key={item.name} variant="outline" className="w-full h-auto py-6 text-left justify-start" asChild>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">{item.name}</span>
            </a>
          </Button>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/gallery/archive">View Archive</Link>
        </Button>
      </div>
    </div>
  )
}
