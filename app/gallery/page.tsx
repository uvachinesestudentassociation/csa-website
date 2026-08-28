import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GalleryList } from "@/components/gallery-list"
import { galleryContent } from "@/content/gallery"
import galleryItems from "./gallery-data.json"

export const metadata: Metadata = {
  title: galleryContent.meta.title,
  description: galleryContent.meta.description,
}

export default function GalleryPage() {
  const { intro, archiveButton, search } = galleryContent

  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>{intro.title}</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">{intro.body}</p>
      </div>

      <GalleryList
        items={galleryItems}
        searchLabel={search.label}
        searchPlaceholder={search.placeholder}
        emptyMessage={search.empty}
      />

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/gallery/archive">{archiveButton}</Link>
        </Button>
      </div>
    </div>
  )
}
