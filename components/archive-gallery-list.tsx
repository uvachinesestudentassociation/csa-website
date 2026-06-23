"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SearchInput } from "@/components/search-input";

interface ArchiveEvent {
  name: string;
  date: string;
  link: string;
}

interface ArchiveYearGroup {
  year: string;
  value: string;
  events: ArchiveEvent[];
}

interface ArchiveGalleryListProps {
  archiveData: ArchiveYearGroup[];
}

export function ArchiveGalleryList({ archiveData }: ArchiveGalleryListProps) {
  const [query, setQuery] = useState("");

  const filteredData = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return archiveData;

    return archiveData
      .map((yearGroup) => ({
        ...yearGroup,
        events: yearGroup.events.filter(
          (event) =>
            event.name.toLowerCase().includes(normalized) ||
            event.date.toLowerCase().includes(normalized),
        ),
      }))
      .filter((yearGroup) => yearGroup.events.length > 0);
  }, [archiveData, query]);

  return (
    <div className="space-y-6">
      <SearchInput
        id="archive-search"
        label="Search archive albums"
        placeholder="Search archive albums..."
        value={query}
        onChange={setQuery}
      />

      {filteredData.length > 0 ? (
        <div className="space-y-6">
          {filteredData.map((yearGroup) => (
            <Accordion key={yearGroup.value} type="single" collapsible className="w-full">
              <AccordionItem value={yearGroup.value}>
                <AccordionTrigger className="text-xl font-bold">
                  {yearGroup.year}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {yearGroup.events.map((event) => (
                      <Button
                        key={`${yearGroup.value}-${event.name}-${event.date}`}
                        variant="outline"
                        className="h-auto w-full justify-start py-6 text-left"
                        asChild
                      >
                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                          <div>
                            <div className="font-semibold">{event.name}</div>
                            <div className="text-sm text-muted-foreground">{event.date}</div>
                          </div>
                        </a>
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No albums match your search.</p>
      )}
    </div>
  );
}
