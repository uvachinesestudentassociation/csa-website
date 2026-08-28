import type { Metadata } from "next"
import Image from "next/image"
import { AboutSection } from "@/components/about-section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { aboutContent } from "@/content/about"
import { siteContent } from "@/content/site"

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
  openGraph: {
    title: aboutContent.meta.title,
    description: aboutContent.meta.description,
    images: [{ url: "/images/about_cover.jpg", alt: aboutContent.cover.alt }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/about_cover.jpg"],
  },
}

export default function AboutPage() {
  const { intro, culture, community, outreach, cover, emphasisLinks, cta } =
    aboutContent
  const { forms } = siteContent

  return (
    <div className="bg-background">
      <div className="relative w-full h-[280px] md:h-[360px] lg:h-[440px] overflow-hidden">
        <Image
          src="/images/about_cover.jpg"
          alt={cover.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70 dark:to-background/80" />
      </div>

      <div className="container-custom max-w-6xl">
        <section
          className="section-title -mt-12 md:-mt-20 relative z-10 mb-16 md:mb-24"
          aria-labelledby="about-intro"
        >
          <RevealOnScroll>
            <h1
              id="about-intro"
              className="text-4xl md:text-5xl lg:text-6xl mb-8 text-primary dark:text-primary-foreground drop-shadow-sm"
            >
              {intro.title}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delayMs={140}>
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
          </RevealOnScroll>
        </section>

        <AboutSection
          id="about-culture"
          title={culture.title}
          paragraphs={culture.paragraphs}
          emphasis={culture.emphasis}
          emphasisLinks={emphasisLinks.culture}
          imageSrc="/images/gallery/chinafest_dragon_justin_2023.JPG"
          imageAlt={culture.imageAlt}
          imagePosition="right"
          revealDelayMs={0}
        />

        <AboutSection
          id="about-community"
          title={community.title}
          paragraphs={community.paragraphs}
          emphasis={community.emphasis}
          emphasisLinks={emphasisLinks.community}
          imageSrc="/images/gallery/asu_exec_2023.jpg"
          imageAlt={community.imageAlt}
          imagePosition="left"
          revealDelayMs={140}
        />

        <AboutSection
          id="about-outreach"
          title={outreach.title}
          paragraphs={outreach.paragraphs}
          emphasis={outreach.emphasis}
          emphasisLinks={emphasisLinks.outreach}
          imageSrc="/images/gallery/yar_2023.jpg"
          imageAlt={outreach.imageAlt}
          imagePosition="right"
          revealDelayMs={280}
          className="mb-20"
        />

        <section
          className="mb-20 text-center"
          aria-labelledby="about-cta"
        >
          <RevealOnScroll>
            <h2 id="about-cta" className="text-primary dark:text-primary-foreground">
              {cta.title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delayMs={140}>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground">
              {cta.body}
            </p>
          </RevealOnScroll>
          <RevealOnScroll
            delayMs={220}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              className="events-page__subscribe"
              href={forms.newMember}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.newMemberLabel}
            </a>
            <a
              className="events-page__open"
              href={forms.returningMember}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.returningMemberLabel}
            </a>
          </RevealOnScroll>
        </section>
      </div>
    </div>
  )
}
