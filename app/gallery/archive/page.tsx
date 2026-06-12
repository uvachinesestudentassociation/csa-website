import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gallery Archive",
  description: "Archived photo albums from past CSA@UVA events and activities.",
}
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft } from "lucide-react"
import archiveData from "./archive-data.json"

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

      <div className="space-y-6">
        {archiveData.map((yearGroup) => (
          <Accordion key={yearGroup.value} type="single" collapsible className="w-full">
            <AccordionItem value={yearGroup.value}>
              <AccordionTrigger className="text-xl font-bold">{yearGroup.year}</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {yearGroup.events.map((event) => (
                    <Button
                      key={`${yearGroup.value}-${event.name}-${event.date}`}
                      variant="outline"
                      className="w-full h-auto py-6 text-left justify-start"
                      asChild
                    >
                      <a href={event.link} target="_blank" rel="noopener noreferrer">
                        <div>
                          <div className="font-semibold">{event.name}</div>
                          <div className="text-sm text-muted-foreground">{event.date}</div>
                        </div>
                      </a>
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

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
