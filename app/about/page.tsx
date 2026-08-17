import type { Metadata } from "next"
import Image from "next/image"
import { aboutContent } from "@/content/about"
import { emphasizePhrases } from "@/content/emphasize"

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
}

function EmphasizedParagraph({
  text,
  phrases,
  className,
}: {
  text: string
  phrases: readonly string[]
  className?: string
}) {
  const parts = emphasizePhrases(text, phrases)
  return (
    <p className={className}>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="font-semibold">
            {part.strong}
          </span>
        ),
      )}
    </p>
  )
}

export default function AboutPage() {
  const { intro, culture, community, outreach, cover } = aboutContent

  return (
    <div className="bg-background">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src="/images/about_cover.jpg"
          alt={cover.alt}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70 dark:to-background/80" />
      </div>

      <div className="container-custom max-w-6xl">
        <div className="section-title -mt-16 md:-mt-24 relative z-10 mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary dark:text-primary-foreground drop-shadow-sm">
            {intro.title}
          </h1>
          <div className="max-w-3xl mx-auto bg-card/90 dark:bg-card/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md">
            {intro.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-xl md:text-2xl font-medium leading-relaxed text-center ${
                  i < intro.paragraphs.length - 1 ? "mb-4" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">
              {culture.title}
            </h2>
            {culture.paragraphs.map((paragraph, i) => (
              <EmphasizedParagraph
                key={i}
                text={paragraph}
                phrases={culture.emphasis}
                className={`leading-relaxed ${i < culture.paragraphs.length - 1 ? "mb-4" : ""}`}
              />
            ))}
          </div>
          <div className="aspect-[4/3] w-full relative rounded-xl overflow-hidden shadow-lg order-1 md:order-2 transform transition-transform duration-500 md:hover:scale-[1.02]">
            <Image
              src="/images/gallery/chinafest_dragon_justin_2023.JPG"
              alt={culture.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32 items-center">
          <div className="aspect-[4/3] w-full relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500 md:hover:scale-[1.02]">
            <Image
              src="/images/gallery/asu_exec_2023.jpg"
              alt={community.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">
              {community.title}
            </h2>
            {community.paragraphs.map((paragraph, i) => (
              <EmphasizedParagraph
                key={i}
                text={paragraph}
                phrases={community.emphasis}
                className="leading-relaxed"
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">
              {outreach.title}
            </h2>
            {outreach.paragraphs.map((paragraph, i) => (
              <EmphasizedParagraph
                key={i}
                text={paragraph}
                phrases={outreach.emphasis}
                className="leading-relaxed"
              />
            ))}
          </div>
          <div className="aspect-[4/3] w-full relative rounded-xl overflow-hidden shadow-lg order-1 md:order-2 transform transition-transform duration-500 md:hover:scale-[1.02]">
            <Image
              src="/images/gallery/yar_2023.jpg"
              alt={outreach.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
