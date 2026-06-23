"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  name: string;
  url: string;
}

interface GalleryListProps {
  items: GalleryItem[];
}

export function GalleryList({ items }: GalleryListProps) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter((item) => item.name.toLowerCase().includes(normalized));
  }, [items, query]);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="gallery-search" className="sr-only">
          Search albums
        </label>
        <input
          id="gallery-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search albums..."
          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Button
              key={item.name}
              variant="outline"
              className="h-auto w-full justify-start py-6 text-left"
              asChild
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span className="font-semibold">{item.name}</span>
              </a>
            </Button>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No albums match your search.</p>
      )}
    </div>
  );
}
