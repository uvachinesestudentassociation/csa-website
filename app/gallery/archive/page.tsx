"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft } from "lucide-react"

// Create the Archive components directly in this file instead of importing them

function Archive2024() {
  const events2024 = [
    {
      name: "SUMMER RECAP",
      date: "5/2024 - 8/2024",
      link: "https://drive.google.com/drive/folders/18i2x4017LPahe4b_-B9gllYAnh35Em-v?usp=sharing",
    },
    {
      name: "SEPTEMBER RECAP",
      date: "9/2024",
      link: "https://drive.google.com/drive/folders/19jOilPHgtfgGzPATqCGfuzPJb1VyB6Sv?usp=sharing",
    },
    // Add more events as needed
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="2024">
        <AccordionTrigger className="text-xl font-bold">2024</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events2024.map((event, index) => (
              <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full h-auto py-6 text-left justify-start">
                  <div>
                    <div className="font-semibold">{event.name}</div>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                  </div>
                </Button>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function Archive2023() {
  const events2023 = [
    {
      name: "RTC Ice Skating",
      date: "1/4/2023",
      link: "https://drive.google.com/drive/folders/17k1Y7trD0glBA_G3shUFTWZ2otxYKnOL?usp=sharing",
    },
    {
      name: "January GBM",
      date: "1/18/2023",
      link: "https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=c33c399a9e&e=f5afb523ef",
    },
    // Add more events as needed
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="2023">
        <AccordionTrigger className="text-xl font-bold">2023</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events2023.map((event, index) => (
              <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full h-auto py-6 text-left justify-start">
                  <div>
                    <div className="font-semibold">{event.name}</div>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                  </div>
                </Button>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function Archive2022() {
  const events2022 = [
    {
      name: "Fourth Year Reception",
      date: "5/1/2022",
      link: "https://drive.google.com/drive/folders/1qk5cGsrDOMXMvYLdYXNWo4cvReZyXJxA?usp=sharing",
    },
    {
      name: "Beach Week Photoshoot",
      date: "5/16/2022",
      link: "https://drive.google.com/drive/folders/1bqHFE-qj4biYnBVzVOIFVVe2401pUzvi?usp=drive_link",
    },
    // Add more events as needed
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="2022">
        <AccordionTrigger className="text-xl font-bold">2022</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events2022.map((event, index) => (
              <a key={index} href={event.link} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full h-auto py-6 text-left justify-start">
                  <div>
                    <div className="font-semibold">{event.name}</div>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                  </div>
                </Button>
              </a>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function ArchivePage() {
  return (
    <div className="container-custom">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="icon" asChild className="mr-4">
          <Link href="/gallery">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="mb-0">Archive</h1>
      </div>

      <div className="space-y-6">
        <Archive2024 />
        <Archive2023 />
        <Archive2022 />
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
