"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube } from "lucide-react"

interface OfficerCardProps {
  imagePath: string
  name: string
  description?: string
}

function OfficerCard({ imagePath, name, description }: OfficerCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 dark:bg-card"
      onMouseEnter={() => description && setIsHovered(true)}
      onMouseLeave={() => description && setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <Image
          src={imagePath || "/placeholder.svg"}
          alt={name}
          fill
          className={`object-cover transition-all duration-300 ${isHovered ? "scale-105 opacity-70" : ""}`}
        />
        {description && isHovered && (
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 text-white">
            <p className="text-sm text-center">{description}</p>
          </div>
        )}
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-lg font-semibold mb-0 dark:text-primary-foreground">{name}</h3>
      </CardContent>
    </Card>
  )
}

export default function OfficersPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>2024-2025 Executive and Officer Board</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="/images/2024-2025/officers/board.jpg"
            alt="Executive and Officer Board"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.youtube.com/watch?v=heCIvZLClME"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-video w-full rounded-lg overflow-hidden bg-black flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-center mb-4">President</h3>
              <OfficerCard imagePath="/images/2024-2025/officers/president.jpg" name="Coco Clement" />
            </div>
            <div>
              <h3 className="text-center mb-4">Vice President</h3>
              <OfficerCard imagePath="/images/2024-2025/officers/vice_president.jpg" name="Lizzie Chu" />
            </div>
            <div>
              <h3 className="text-center mb-4">Secretary</h3>
              <OfficerCard imagePath="/images/2024-2025/officers/secretary.jpg" name="Laura Abood" />
            </div>
            <div>
              <h3 className="text-center mb-4">Treasurer</h3>
              <OfficerCard imagePath="/images/2024-2025/officers/treasurer.jpg" name="Nick Liu" />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="officer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-center mb-4">Advisors</h3>
              <OfficerCard
                imagePath="/images/2024-2025/officers/advisors.jpg"
                name="Alisha Qian, Kelly Gu, and Hana Wang"
                description="Advisors are previous leaders in CSA who use their expertise to ensure all CSA events run smoothly."
              />
            </div>
            <div>
              <h3 className="text-center mb-4">Community</h3>
              <OfficerCard
                imagePath="/images/2024-2025/officers/community.jpg"
                name="Brian Xu, Yafu Xu, and Dylan Lee"
                description="Community chairs oversee all activities pertaining to membership recruiting and retention. They are in charge of the family program, which includes planning family weeks and family competitions."
              />
            </div>
            <div>
              <h3 className="text-center mb-4">Culture</h3>
              <OfficerCard
                imagePath="/images/2024-2025/officers/culture.jpg"
                name="Michelle Zhuang, Dakota Yu, and li Rong"
                description="Culture chairs oversee the planning of all cultural events in order to promote Chinese culture on grounds and within the local Charlottesville community."
              />
            </div>
            <div>
              <h3 className="text-center mb-4">Fundraising</h3>
              <OfficerCard
                imagePath="/images/2024-2025/officers/fundraising.jpg"
                name="Maggie Zheng, Emily Tran, and Amy Chen"
                description="Fundraising chairs work closely with the Treasurer to plan and organize fundraising events. They are also in charge of obtaining sponsors and raffles for CSA events."
              />
            </div>
            <div>
              <h3 className="text-center mb-4">Historic</h3>
              <OfficerCard
                imagePath="/images/2024-2025/officers/historic.jpg"
                name="Mikayla Wolf, Maxwell Lu, and Alice Chen"
                description="Historic chairs are responsible for taking pictures and videos at all CSA events as well as creating promotional and monthly recap videos during the year."
              />
            </div>
            <div>
              <h3 className="text-center mb-4">Public Relations</h3>
              <OfficerCard
                imagePath="/images/2024-2025/officers/pr.jpg"
                name="Claire Wei, Maggie Shifflett, and Viny Li"
                description="Publicity chairs are in charge of advertising CSA events by creating flyers and Facebook profile advertisements for each event."
              />
            </div>
            <div>
              <h3 className="text-center mb-4">Social</h3>
              <OfficerCard
                imagePath="/images/2024-2025/officers/social.jpg"
                name="Derek Li and Helen Ni"
                description="Social chairs plan and organize CSA-wide social events."
              />
            </div>
            <div>
              <h3 className="text-center mb-4">Sports</h3>
              <OfficerCard
                imagePath="/images/2024-2025/officers/sports.jpg"
                name="Stephen Ng, Sabrina Li, and Jason Tung"
                description="Sports chairs are responsible for organizing sports events and tournaments such as IM sports games and practices."
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
