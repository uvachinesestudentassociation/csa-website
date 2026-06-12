"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import alumniData from "./alumni-data.json"

interface AlumniYear {
  year: number
  imageSrc: string
  people: Array<{
    name: string
    roles: string[]
  }>
}

function AlumniCard({ year, imageSrc, people }: AlumniYear) {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => setShowDetails((prev) => !prev)

  return (
    <Card
      className="overflow-hidden"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      onClick={toggleDetails}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          toggleDetails()
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={showDetails}
    >
      <div className="relative">
        <div className="relative aspect-video">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={`Class of ${year}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-all duration-300 ${showDetails ? "opacity-30" : "opacity-100"}`}
          />
        </div>

        <div
          className={`absolute inset-0 bg-background/80 dark:bg-background/90 p-6 overflow-y-auto transition-opacity duration-300 ${
            showDetails ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-xl font-bold mb-4 dark:text-primary-foreground">Class of {year}</p>
          <div className="grid grid-cols-2 gap-2">
            {people.map((person) => (
              <div key={person.name} className="flex flex-col">
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
        <p className="text-muted-foreground">Hover or tap to see alumni details</p>
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
