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
        <div className="p-6 flex flex-col">
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
      id: "cranes",
      name: "Crimson Cranes",
      image: "/images/2024-2025/families/cranes.jpg",
      instagramUrl: "https://www.instagram.com/p/C_s1qT2RZy4/",
      description:
        "The Crimson Cranes family is known for their creativity and artistic talents. They often win competitions that involve performances and creative challenges.",
    },
    {
      id: "eagles",
      name: "Emerald Eagles",
      image: "/images/2024-2025/families/eagles.jpg",
      instagramUrl: "https://www.instagram.com/p/C_qkcHtR6V1/",
      description:
        "The Emerald Eagles family excels in leadership and organization. They're often the ones taking initiative in group activities and community service projects.",
    },
    {
      id: "swans",
      name: "Sapphire Swans",
      image: "/images/2024-2025/families/swans.jpg",
      instagramUrl: "https://www.instagram.com/p/C_tZTNUpvA7/",
      description:
        "The Sapphire Swans family is known for their grace and teamwork. They consistently show strong bonds and support for each other throughout the year.",
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
