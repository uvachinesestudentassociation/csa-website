"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface SlidingTabItem {
  value: string;
  label: ReactNode;
  mobileLabel?: ReactNode;
}

interface SlidingTabsListProps {
  activeValue: string;
  tabs: SlidingTabItem[];
  variant?: "default" | "spread";
}

export function SlidingTabsList({
  activeValue,
  tabs,
  variant = "default",
}: SlidingTabsListProps) {
  const isSpread = variant === "spread";
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());
  const previousValue = useRef(activeValue);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [animateIndicator, setAnimateIndicator] = useState(false);

  const updateIndicator = useCallback(() => {
    const tab = tabRefs.current.get(activeValue);
    if (!tab) return;

    setIndicator({
      left: tab.offsetLeft,
      width: tab.offsetWidth,
    });
  }, [activeValue]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    if (previousValue.current === activeValue) return;

    setAnimateIndicator(true);
    previousValue.current = activeValue;

    const timer = window.setTimeout(() => setAnimateIndicator(false), 250);
    return () => window.clearTimeout(timer);
  }, [activeValue]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const handleLayoutChange = () => updateIndicator();
    const resizeObserver = new ResizeObserver(handleLayoutChange);

    resizeObserver.observe(list);
    list.addEventListener("scroll", handleLayoutChange, { passive: true });
    window.addEventListener("resize", handleLayoutChange);

    return () => {
      resizeObserver.disconnect();
      list.removeEventListener("scroll", handleLayoutChange);
      window.removeEventListener("resize", handleLayoutChange);
    };
  }, [updateIndicator]);

  return (
    <div className={cn("tabs-bar", isSpread && "tabs-bar--spread")}>
      <TabsList
        ref={listRef}
        className={cn(
          "tabs-list !flex !items-end rounded-none bg-transparent p-0",
          isSpread
            ? "tabs-list--spread !h-12 !min-h-12 !justify-stretch"
            : "!h-10 !min-h-10 !justify-start",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "tab-indicator",
            isSpread && "tab-indicator--spread",
            animateIndicator && "tab-indicator--animate",
          )}
          style={{
            left: indicator.width > 0 ? indicator.left : undefined,
            width: indicator.width > 0 ? indicator.width : undefined,
            opacity: indicator.width > 0 ? 1 : 0,
          }}
        />
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            ref={(node) => {
              if (node) tabRefs.current.set(tab.value, node);
              else tabRefs.current.delete(tab.value);
            }}
            value={tab.value}
            className={cn(
              "tab !transition-colors rounded-none data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none",
              isSpread && "tab--spread",
            )}
          >
            <span className="md:hidden">{tab.mobileLabel ?? tab.label}</span>
            <span className="hidden md:inline">{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}
