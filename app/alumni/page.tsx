"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import alumniData from "./alumni-data.json";

interface AlumniPerson {
  name: string;
  roles: string[];
}

interface AlumniYear {
  year: number;
  imageSrc: string;
  people: AlumniPerson[];
}

function getRolePriority(roles: string[]): number {
  if (roles.includes("exec")) return 0;
  if (roles.includes("oboard")) return 1;
  if (roles.includes("famhead")) return 2;
  return 3;
}

function sortPeopleByRole(people: AlumniPerson[]): AlumniPerson[] {
  return [...people].sort((a, b) => {
    const priorityDiff = getRolePriority(a.roles) - getRolePriority(b.roles);
    if (priorityDiff !== 0) return priorityDiff;
    return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
  });
}

function RoleBadges({ roles }: { roles: string[] }) {
  if (roles.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-end gap-1">
      {roles.includes("exec") && (
        <Badge variant="default" className="text-xs">
          Exec
        </Badge>
      )}
      {roles.includes("oboard") && (
        <Badge
          variant="outline"
          className="text-xs dark:border-primary/50 dark:text-foreground"
        >
          Officer
        </Badge>
      )}
      {roles.includes("famhead") && (
        <Badge
          variant="secondary"
          className="text-xs dark:bg-secondary dark:text-secondary-foreground"
        >
          Family Head
        </Badge>
      )}
    </div>
  );
}

function AlumniYearHero({
  year,
  imageSrc,
  memberCount,
}: {
  year: number;
  imageSrc: string;
  memberCount: number;
}) {
  return (
    <div className="relative w-full">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt=""
        width={1600}
        height={900}
        sizes="(max-width: 768px) 100vw, 896px"
        className="block h-auto w-full"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-card/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-20 p-6">
        <h2 className="mb-0 text-2xl font-bold text-foreground dark:text-primary-foreground">
          Class of {year}
        </h2>
        <p className="mb-0 mt-1 text-sm text-muted-foreground">
          {memberCount} {memberCount === 1 ? "member" : "members"}
        </p>
      </div>
    </div>
  );
}

function AlumniRoster({ year, imageSrc, people }: AlumniYear) {
  const sortedPeople = sortPeopleByRole(people);

  return (
    <div>
      <AlumniYearHero year={year} imageSrc={imageSrc} memberCount={people.length} />

      <ul className="grid gap-x-8 gap-y-3 px-6 pb-6 pt-4 md:grid-cols-2">
        {sortedPeople.map((person) => (
          <li
            key={person.name}
            className="flex items-start justify-between gap-4 py-1"
          >
            <span className="dark:text-foreground">{person.name}</span>
            <RoleBadges roles={person.roles} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const years = alumniData as AlumniYear[];
const defaultYear = String(years[0]?.year ?? "");

export default function AlumniPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Alumni</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Celebrating our CSA alumni and their contributions to our
          organization.
        </p>
      </div>

      <Card className="mt-12 overflow-hidden p-0 dark:bg-card">
        <Tabs defaultValue={defaultYear}>
          <div className="tabs-bar">
            <TabsList className="tabs-list !flex !h-10 !min-h-10 !items-end !justify-start rounded-none bg-transparent p-0">
              {years.map((yearData) => (
                <TabsTrigger
                  key={yearData.year}
                  value={String(yearData.year)}
                  className="tab !transition-colors rounded-none data-[state=active]:rounded-t-lg data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  {yearData.year}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {years.map((yearData) => (
            <TabsContent
              key={yearData.year}
              value={String(yearData.year)}
              className="tabs-panel p-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <AlumniRoster
                year={yearData.year}
                imageSrc={yearData.imageSrc}
                people={yearData.people}
              />
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  );
}
