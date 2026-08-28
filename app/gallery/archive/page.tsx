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
  return (
    <div className="container-custom">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/gallery">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">{archiveContent.backLabel}</span>
          </Link>
        </Button>
        <h1 className="mb-0">{archiveContent.title}</h1>
      </div>

      <ArchiveGalleryList archiveData={archiveData} />

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <a href={archiveContent.facebookAlbums.href} target="_blank" rel="noopener noreferrer">
            {archiveContent.facebookAlbums.label}
          </a>
        </Button>
      </div>
    </div>
  )
}
