import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { ArchiveGalleryList } from "@/components/archive-gallery-list"
import { archiveContent } from "@/content/archive"
import archiveData from "./archive-data.json"

export const metadata: Metadata = {
  title: archiveContent.meta.title,
  description: archiveContent.meta.description,
}

export default function ArchivePage() {
  const { title, backLabel, search, facebookAlbums } = archiveContent

  return (
    <div className="container-custom">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/gallery">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">{backLabel}</span>
          </Link>
        </Button>
        <h1 className="mb-0">{title}</h1>
      </div>

      <ArchiveGalleryList
        archiveData={archiveData}
        searchLabel={search.label}
        searchPlaceholder={search.placeholder}
        emptyMessage={search.empty}
      />

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <a href={facebookAlbums.href} target="_blank" rel="noopener noreferrer">
            {facebookAlbums.label}
          </a>
        </Button>
      </div>
    </div>
  )
}
