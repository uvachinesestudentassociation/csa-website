"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube } from "lucide-react"
import officersData from "./officers-data.json"

interface OfficerCardProps {
  imagePath: string
  name: string
  description?: string
}

function OfficerCard({ imagePath, name, description }: OfficerCardProps) {
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    if (description) setShowDescription((prev) => !prev)
  }

  return (
    <Card
      className="overflow-hidden transition-all duration-300 dark:bg-card"
      onMouseEnter={() => description && setShowDescription(true)}
      onMouseLeave={() => description && setShowDescription(false)}
      onClick={toggleDescription}
      onKeyDown={(e) => {
        if (description && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault()
          toggleDescription()
        }
      }}
      tabIndex={description ? 0 : undefined}
      role={description ? "button" : undefined}
      aria-expanded={description ? showDescription : undefined}
    >
      <div className="relative aspect-square">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className={`object-cover transition-all duration-300 ${showDescription ? "scale-105 opacity-70" : ""}`}
        />
        {description && showDescription && (
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 text-white">
            <p className="text-sm text-center">{description}</p>
          </div>
        )}
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-0 dark:text-primary-foreground">{name}</h3>
        {description && <p className="text-xs text-muted-foreground mt-1 md:hidden">Tap for bio</p>}
      </CardContent>
    </Card>
  )
}

export default function OfficersPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>{officersData.title}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={officersData.boardImage}
            alt="Executive and Officer Board"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          <a
            href={officersData.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch CSA board video on YouTube"
            className="group relative aspect-video w-full rounded-lg overflow-hidden bg-black flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
            <Youtube className="w-16 h-16 text-white group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>
      </div>

      <Tabs defaultValue="executive" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="executive">Executive Board</TabsTrigger>
          <TabsTrigger value="officer">Officer Board</TabsTrigger>
        </TabsList>

        <TabsContent value="executive">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {officersData.executive.map((officer) => (
              <div key={officer.role}>
                <h3 className="text-center mb-4">{officer.role}</h3>
                <OfficerCard imagePath={officer.imagePath} name={officer.name} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="officer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officersData.officers.map((officer) => (
              <div key={officer.role}>
                <h3 className="text-center mb-4">{officer.role}</h3>
                <OfficerCard
                  imagePath={officer.imagePath}
                  name={officer.name}
                  description={officer.description}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
