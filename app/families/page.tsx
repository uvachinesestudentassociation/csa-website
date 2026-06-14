"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { SlidingTabsList } from "@/components/sliding-tabs-list";
import families from "./families-data.json";

interface Family {
  id: string;
  name: string;
  image: string;
  instagramUrl: string;
  description: string;
}

interface FamilyCardProps {
  name: string;
  image: string;
  instagramUrl: string;
  description: string;
}

function FamilyCard({
  name,
  image,
  instagramUrl,
  description,
}: FamilyCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-none dark:bg-card">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative aspect-square md:aspect-auto md:min-h-[300px]">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${name} family photo`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex min-h-[300px] flex-col p-6">
          <h3 className="mb-4 text-2xl font-bold dark:text-primary-foreground">
            {name}
          </h3>
          <p className="mb-4 flex-1 dark:text-foreground">{description}</p>
          <div className="mt-auto">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80 dark:text-primary-foreground dark:hover:text-primary-foreground/80"
            >
              <Instagram className="h-5 w-5" />
              <span>View on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

const familyList = families as Family[];

const familyTabs = familyList.map((family) => ({
  value: family.id,
  label: family.name,
}));

const defaultFamily = familyList[0]?.id ?? "";

export default function FamiliesPage() {
  const [activeFamily, setActiveFamily] = useState(defaultFamily);

  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>CSA Families</h1>
        <p className="mx-auto max-w-3xl text-center text-lg">
          Every year, all members are assigned to different families. Families
          play a major role in CSA&apos;s social activities, from organizing
          family events to creating a sense of community for both new and old
          members. The family system cultivates strong connections, fostering
          friendships and shared experiences that define the essence of the CSA.
        </p>
      </div>

      <Card className="mt-12 overflow-hidden p-0 dark:bg-card">
        <Tabs value={activeFamily} onValueChange={setActiveFamily}>
          <SlidingTabsList
            activeValue={activeFamily}
            tabs={familyTabs}
            variant="spread"
          />

          {familyList.map((family) => (
            <TabsContent
              key={family.id}
              value={family.id}
              className="tabs-panel p-6 focus-visible:outline-none focus-visible:ring-0"
            >
              <FamilyCard
                name={family.name}
                image={family.image}
                instagramUrl={family.instagramUrl}
                description={family.description}
              />
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  );
}
