"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { officersContent } from "@/content/officers"
import officersData from "./officers-data.json"

function getYoutubeEmbedUrl(watchUrl: string): string | null {
  const match = watchUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/)
  if (!match?.[1]) return null

  const params = new URLSearchParams({
    playsinline: "1",
    rel: "0",
  })

  return `https://www.youtube.com/embed/${match[1]}?${params.toString()}`
}

const youtubeEmbedUrl = getYoutubeEmbedUrl(officersData.youtubeUrl)

interface OfficerCardProps {
  imagePath: string
  name: string
  description?: string
}

function OfficerCard({ imagePath, name, description }: OfficerCardProps) {
  const [showDescription, setShowDescription] = useState(false)

  if (!description) {
    return (
      <Card className="overflow-hidden dark:bg-card">
        <div className="relative aspect-square">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-0 dark:text-primary-foreground">{name}</h3>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden dark:bg-card">
      <button
        type="button"
        aria-expanded={showDescription}
        onClick={() => setShowDescription((prev) => !prev)}
        className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <div className="relative aspect-square">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={`object-cover transition-opacity ${showDescription ? "opacity-70" : ""}`}
          />
          {showDescription && (
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/50 text-white">
              <p className="text-sm text-center">{description}</p>
            </div>
          )}
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-0 dark:text-primary-foreground">{name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{officersContent.card.tapForBio}</p>
        </CardContent>
      </button>
    </Card>
  )
}

export default function OfficersPage() {
  const ui = officersContent
  const showComingSoon = ui.comingSoon.enabled
  const [frameNode, setFrameNode] = useState<HTMLDivElement | null>(null)
  const [frameIn, setFrameIn] = useState(false)

  useEffect(() => {
    if (!frameNode) {
      setFrameIn(false)
      return
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFrameIn(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setFrameIn(true)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )
    observer.observe(frameNode)
    return () => observer.disconnect()
  }, [frameNode])

  const pageBody = (
    <div className="container-custom">
      <div className="section-title">
        <h1>{officersData.title}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={officersData.boardImage}
            alt={ui.boardImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          {youtubeEmbedUrl ? (
            <iframe
              src={youtubeEmbedUrl}
              title={ui.videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : officersData.youtubeUrl ? (
            <a
              href={officersData.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center text-white"
            >
              {ui.youtubeFallback}
            </a>
          ) : (
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-white">
              {ui.videoPlaceholder}
            </p>
          )}
        </div>
      </div>

      <Tabs defaultValue="executive" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="executive">{ui.tabs.executive}</TabsTrigger>
          <TabsTrigger value="officer">{ui.tabs.officer}</TabsTrigger>
        </TabsList>

        <TabsContent value="executive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officersData.executive.map((officer) => (
              <div key={officer.role}>
                <h3 className="text-center mb-4">{officer.role}</h3>
                <OfficerCard imagePath={officer.imagePath} name={officer.name} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="officer">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officersData.officers
              .filter((officer) => officer.role !== "Webmaster")
              .map((officer) => (
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
          {officersData.officers
            .filter((officer) => officer.role === "Webmaster")
            .map((officer) => (
              <div
                key={officer.role}
                ref={setFrameNode}
                className={frameIn ? "webmaster-spotlight is-in mx-auto mt-10" : "webmaster-spotlight mx-auto mt-10"}
              >
                <h3 className="mb-4 text-center font-display font-normal text-primary">
                  {officer.role}
                </h3>
                <div className="webmaster-portrait">
                  <div className="webmaster-frame" aria-hidden="true" />
                  <div className="webmaster-frame__photo">
                    <Image
                      src={officer.imagePath || "/placeholder.svg"}
                      alt={officer.name}
                      fill
                      sizes="24rem"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="px-4 pb-4 text-center">
                  <h3 className="mb-2 text-lg font-semibold dark:text-primary-foreground">
                    {officer.name}
                  </h3>
                  {officer.description ? (
                    <p className="text-sm text-muted-foreground">{officer.description}</p>
                  ) : null}
                </div>
              </div>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )

  if (!showComingSoon) {
    return pageBody
  }

  return (
    <div className="officers-gate">
      <div className="officers-gate__content" aria-hidden="true">
        {pageBody}
      </div>
      <div className="officers-gate__overlay" role="status" aria-live="polite">
        <p className="officers-gate__banner">{ui.comingSoon.banner}</p>
      </div>
    </div>
  )
}
