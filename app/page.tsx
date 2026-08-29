import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HomeHeroMedia } from "@/components/home-hero-media"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { previewAssets } from "@/app/animations-preview/assets"
import { homeContent } from "@/content/home"
import { siteContent } from "@/content/site"

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
}

export default function Home() {
  const { hero, pillars } = homeContent
  const { forms } = siteContent

  return (
    <div>
      <link rel="preload" as="image" href="/images/mountains.png" />
      {previewAssets.cloudMistLayers.map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}
      <section className="home-photo-fold home-photo-fold--pillars" aria-label="CSA@UVA">
        <HomeHeroMedia />
        <div className="home-photo-fold__scrim" aria-hidden />
        <div className="home-photo-fold__stack">
          <div className="home-photo-fold__caption home-photo-fold__caption--center">
            <h1 className="home-photo-fold__brand home-photo-fold__brand--center home-rise">
              {hero.headline}
            </h1>
            <div className="home-photo-fold__actions home-photo-fold__actions--center home-rise-delay-1">
              <a
                className="home-cta-primary"
                href={forms.newMember}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.ctaNew}
              </a>
              <a
                className="home-cta-link"
                href={forms.returningMember}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.ctaReturning}
              </a>
            </div>
          </div>

          <ul className="home-pillars" aria-label="What we do">
            {pillars.map((pillar, i) => (
              <li key={pillar.id}>
                <RevealOnScroll delayMs={120 + i * 80} className="home-pillar-tile">
                  <div className="home-pillar-tile__thumb">
                    <Image
                      src={pillar.imageSrc}
                      alt={pillar.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h2 className="home-pillar-tile__title">{pillar.title}</h2>
                  <p className="home-pillar-tile__line">{pillar.line}</p>
                  <Link href={pillar.href} className="home-pillar-tile__link">
                    Learn more →
                  </Link>
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
