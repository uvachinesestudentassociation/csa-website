import Image from "next/image"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { EmphasizedParagraph } from "@/components/emphasized-paragraph"

type AboutSectionProps = {
  id: string
  title: string
  paragraphs: readonly string[]
  emphasis: readonly string[]
  emphasisLinks?: Record<string, string>
  imageSrc: string
  imageAlt: string
  imagePosition: "left" | "right"
  revealDelayMs?: number
  className?: string
}

const SECTION_IMAGE_SIZES = "(max-width: 768px) 100vw, 50vw"

export function AboutSection({
  id,
  title,
  paragraphs,
  emphasis,
  emphasisLinks,
  imageSrc,
  imageAlt,
  imagePosition,
  revealDelayMs = 0,
  className,
}: AboutSectionProps) {
  const textOrder =
    imagePosition === "right" ? "order-2 md:order-1" : "order-2 md:order-2"
  const imageOrder =
    imagePosition === "right" ? "order-1 md:order-2" : "order-1 md:order-1"

  return (
    <section
      className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32 items-center ${className ?? ""}`}
      aria-labelledby={id}
    >
      <RevealOnScroll delayMs={revealDelayMs} className={textOrder}>
        <div>
          <h2 id={id} className="mb-6 text-primary dark:text-primary-foreground">
            {title}
          </h2>
          {paragraphs.map((paragraph, i) => (
            <EmphasizedParagraph
              key={i}
              text={paragraph}
              phrases={emphasis}
              links={emphasisLinks}
              className={`leading-relaxed ${i < paragraphs.length - 1 ? "mb-4" : ""}`}
            />
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll
        delayMs={revealDelayMs + 80}
        className={`aspect-[4/3] w-full relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 md:hover:scale-[1.02] ${imageOrder}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={SECTION_IMAGE_SIZES}
          className="object-cover"
        />
      </RevealOnScroll>
    </section>
  )
}
