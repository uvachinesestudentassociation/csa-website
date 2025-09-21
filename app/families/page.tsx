"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram } from "lucide-react"

interface FamilyCardProps {
  name: string
  image: string
  instagramUrl: string
  description: string
}

function FamilyCard({ name, image, instagramUrl, description }: FamilyCardProps) {
  return (
    <Card className="overflow-hidden dark:bg-card">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative aspect-square md:aspect-auto">
          <Image src={image || "/placeholder.svg"} alt={`${name} family photo`} fill className="object-cover" />
        </div>
        <div className="p-6 flex flex-col h-[400px]">
          <h3 className="text-2xl font-bold mb-4 dark:text-primary-foreground">{name}</h3>
          <p className="mb-4 dark:text-foreground">{description}</p>
          <div className="mt-auto">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 dark:text-primary-foreground dark:hover:text-primary-foreground/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>View on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function FamiliesPage() {
  const families = [
    {
      id: "guppies",
      name: "Golden Guppies",
      image: "/images/2025-2026/families/guppies.jpg",
      instagramUrl: "https://www.instagram.com/csa.guppies/",
      description:
        "We are THE Golden Guppies, home to the silliest, funniest, awesomest, fishies around! We are all about having some fun and love to make big waves 🌊",
    },
    {
      id: "jellyfish",
      name: "Jade Jellyfish",
      image: "/images/2025-2026/families/jellyfish.jpg",
      instagramUrl: "https://www.instagram.com/csa.jellyfish/",
      description:
        "Hey guys!! We’re the JADE JELLYFISH 🪼 We are SO excited to get to know everyone this year and make some awesome memories!!⭐️",
    },
    {
      id: "starfish",
      name: "Scarlet Starfish",
      image: "",
      instagramUrl: "https://www.instagram.com/csa.starfish/",
      description:
        "SUP SUP! 🙋‍♀️ We're the Scarlet Starfish ⭐ and we're here for good time, not a long time. Come find your new home 🏡and homies 🫂 where we will teach you how to play MAHJONG 🀄, make SHRINKYDINKS 🎨 together, and become POWERHOUSES on the court ⛹️and in the iron temple 🏋️‍♀️! Loads of events every month 🗓️ - hope to see you 🫵 there 😈",
    },
  ]

  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>CSA Families</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Every year, all members are assigned to different families. Families play a major role in CSA&apos;s social
          activities, from organizing family events to creating a sense of community for both new and old members. The
          family system cultivates strong connections, fostering friendships and shared experiences that define the
          essence of the CSA.
        </p>
      </div>

      <Tabs defaultValue={families[0].id} className="mt-12">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {families.map((family) => (
            <TabsTrigger key={family.id} value={family.id}>
              {family.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {families.map((family) => (
          <TabsContent key={family.id} value={family.id}>
            <FamilyCard
              name={family.name}
              image={family.image}
              instagramUrl={family.instagramUrl}
              description={family.description}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
