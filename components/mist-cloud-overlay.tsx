import Image from "next/image"
import { previewAssets } from "@/app/animations-preview/assets"
import { cn } from "@/lib/utils"

type MistCloudOverlayProps = {
  className?: string
  /** Softer blend for photo heroes (default). Use "demo" for the preview stage. */
  tone?: "hero" | "demo"
}

/** CSS-driven mist — motion starts on first paint, no JS/hydration wait. */
export function MistCloudOverlay({
  className,
  tone = "hero",
}: MistCloudOverlayProps) {
  return (
    <div
      className={cn(
        "mist-cloud-overlay",
        `mist-cloud-overlay--${tone}`,
        className
      )}
      aria-hidden
    >
      {previewAssets.cloudMistLayers.map((src, i) => (
        <div key={src} className={`mist-cloud-layer mist-cloud-layer--${i}`}>
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
            priority={tone === "hero"}
          />
        </div>
      ))}
    </div>
  )
}
