"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AlumniYear {
  year: number
  imageSrc: string
  people: Array<{
    name: string
    roles: string[]
  }>
}

// Sample alumni data
const alumniData: AlumniYear[] = [
  {
    year: 2024,
    imageSrc: "/images/chinafest-covers/chinafest_2024.jpg",
    people: [
      { name: "Justin Zhang", roles: ["exec", "oboard", "famhead"] },
      { name: "Emma Mei Andreas", roles: ["exec", "oboard", "famhead"] },
      { name: "Olivia Wang", roles: ["exec", "oboard"] },
      { name: "Safa Khan", roles: ["exec", "oboard", "famhead"] },
      { name: "Kaylee Liu", roles: ["oboard", "famhead"] },
      { name: "Michelle Kwan", roles: ["oboard", "famhead"] },
      { name: "Stacy Meng", roles: ["oboard", "famhead"] },
      { name: "Connie Du", roles: ["oboard", "famhead"] },
      { name: "Iris Chen", roles: ["oboard", "famhead"] },
    ],
  },
  {
    year: 2023,
    imageSrc: "/images/chinafest-covers/chinafest_2023.png",
    people: [
      { name: "Alan Zheng", roles: ["exec", "oboard", "famhead"] },
      { name: "Abigail Castro", roles: ["exec", "oboard"] },
      { name: "Jaden Ko", roles: ["exec", "oboard", "famhead"] },
      { name: "Cindy Huang", roles: ["oboard", "famhead"] },
      { name: "Jennifer Sheng", roles: ["oboard", "famhead"] },
      { name: "Qinyuan Jiang", roles: ["oboard", "famhead"] },
      { name: "Vivian Ma", roles: ["oboard", "famhead"] },
      { name: "Wen Ip", roles: ["famhead"] },
      { name: "Darnell Khay", roles: ["famhead"] },
    ],
  },
  {
    year: 2022,
    imageSrc: "/images/chinafest-covers/chinafest_2022.png",
    people: [
      { name: "Janessa Jiang", roles: ["exec", "oboard", "famhead"] },
      { name: "Jason Yung", roles: ["exec", "oboard"] },
      { name: "Justin Gou", roles: ["exec", "oboard"] },
      { name: "Sam Chen", roles: ["exec", "oboard", "famhead"] },
      { name: "Darrel Zhang", roles: ["oboard", "famhead"] },
      { name: "Megan Lin", roles: ["famhead"] },
      { name: "Amy Wen", roles: ["oboard", "famhead"] },
      { name: "Alice Liu", roles: ["famhead"] },
    ],
  },
]

function AlumniCard({ year, imageSrc, people }: AlumniYear) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card className="overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative">
        <div className="relative aspect-video">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={`Class of ${year}`}
            fill
            className={`object-cover transition-all duration-300 ${isHovered ? "opacity-30" : "opacity-100"}`}
          />
        </div>

        <div
          className={`absolute inset-0 bg-background/80 dark:bg-background/90 p-6 overflow-y-auto transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h3 className="text-xl font-bold mb-4 dark:text-primary-foreground">Class of {year}</h3>
          <div className="grid grid-cols-2 gap-2">
            {people.map((person, index) => (
              <div key={index} className="flex flex-col">
                <span className="dark:text-foreground">{person.name}</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {person.roles.includes("exec") && (
                    <Badge variant="default" className="text-xs">
                      Exec
                    </Badge>
                  )}
                  {person.roles.includes("oboard") && (
                    <Badge variant="outline" className="text-xs dark:border-primary/50 dark:text-foreground">
                      Officer
                    </Badge>
                  )}
                  {person.roles.includes("famhead") && (
                    <Badge variant="secondary" className="text-xs dark:bg-secondary dark:text-secondary-foreground">
                      Family Head
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CardContent className="p-4 text-center">
        <h3 className="text-xl font-bold dark:text-primary-foreground">Class of {year}</h3>
        <p className="text-muted-foreground">Hover to see alumni details</p>
      </CardContent>
    </Card>
  )
}

export default function AlumniPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Alumni</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Celebrating our CSA alumni and their contributions to our organization.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumniData.map((yearData) => (
          <AlumniCard key={yearData.year} year={yearData.year} imageSrc={yearData.imageSrc} people={yearData.people} />
        ))}
      </div>
    </div>
  )
}
