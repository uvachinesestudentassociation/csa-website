import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { ArchiveGalleryList } from "@/components/archive-gallery-list"
import archiveData from "./archive-data.json"

export const metadata: Metadata = {
  title: "Gallery Archive",
  description: "Archived photo albums from past CSA@UVA events and activities.",
}

export default function ArchivePage() {
  return (
    <div className="container-custom">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/gallery">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back to gallery</span>
          </Link>
        </Button>
        <h1 className="mb-0">Archive</h1>
      </div>

      <ArchiveGalleryList archiveData={archiveData} />

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <a href="https://www.facebook.com/csa.uva/photos_albums" target="_blank" rel="noopener noreferrer">
            Facebook Group Photo Albums (2013-2022)
          </a>
        </Button>
      </div>
    </div>
  )
}
