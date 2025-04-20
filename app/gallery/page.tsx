"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronUp } from "lucide-react"

// Gallery content data
const galleryItems = [
  { id: 1, image: "/images/gallery/fmf_nov_2024.JPG", caption: "FullMoonFest (11/2/2024)" },
  { id: 2, image: "/images/gallery/asu_group_oct_2024.jpg", caption: "ASU Semi-Formal (10/18/2024)" },
  { id: 3, image: "/images/gallery/yar_2024.jpg", caption: "YAR Tailgate (10/5/2024)" },
  { id: 4, image: "/images/gallery/ice_cream_social_2024.jpg", caption: "Ice Cream Social (9/7/2024)" },
  { id: 5, image: "/images/gallery/asu_group_oct_2023.JPG", caption: "ASU Semi-Formal (10/22/2023)" },
  { id: 6, image: "/images/gallery/asu_exec_2023.jpg", caption: "2023-24 Exec at ASU Semi-Formal (10/22/2023)" },
  { id: 7, image: "/images/gallery/pumpkin_painting_2023.jpg", caption: "Pumpkin Painting (10/14/2023)" },
  { id: 8, image: "/images/gallery/yar_2023.jpg", caption: "YAR Tailgate (10/7/2023)" },
  { id: 9, image: "/images/gallery/gbm_2023.jpg", caption: "General Body Meeting (10/4/2023)" },
  { id: 10, image: "/images/gallery/sunset_series_2023.jpg", caption: "Class of 2026 at Sunset Series (9/14/2023)" },
  { id: 11, image: "/images/gallery/downtown_group2_2023.jpg", caption: "Downtown Night (9/3/2023)" },
  { id: 12, image: "/images/gallery/downtown_group1_2023.jpg", caption: "Downtown Night (9/3/2023)" },
]

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setVisible(window.scrollY > 300)
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`fixed bottom-6 right-6 rounded-full shadow-md transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  )
}

export default function GalleryPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Gallery</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Explore photos from our events and activities throughout the years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden cursor-pointer hover:shadow-md dark:hover:shadow-primary/20 transition-shadow">
                <div className="relative aspect-square">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.caption}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="font-medium">{item.caption}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="relative aspect-video w-full">
                <Image src={item.image || "/placeholder.svg"} alt={item.caption} fill className="object-contain" />
              </div>
              <p className="text-center font-medium">{item.caption}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <a href="/gallery/archive">View Archive</a>
        </Button>
      </div>

      <ScrollToTopButton />
    </div>
  )
}
