import type { Metadata } from "next"
import Link from "next/link"
import { HomeHeroMedia } from "@/components/home-hero-media"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { previewAssets } from "@/app/animations-preview/assets"
import { homeContent } from "@/content/home"
import { siteContent } from "@/content/site"
import { getHomeHubLinks } from "@/lib/home-hub"

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
}

export default function Home() {
  const { hero } = homeContent
  const { forms } = siteContent
  const hubLinks = getHomeHubLinks(siteContent.nav.links)

  return (
    <div>
      <link rel="preload" as="image" href="/images/mountains.png" />
      {previewAssets.cloudMistLayers.map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}
      <section className="home-photo-fold" aria-label="CSA@UVA">
        <HomeHeroMedia />
        <div className="home-photo-fold__scrim" aria-hidden />
        <div className="home-photo-fold__caption">
          <h1 className="home-photo-fold__brand home-rise">{hero.headline}</h1>
          <div className="home-photo-fold__actions home-rise-delay-1">
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
      </section>
      <section className="home-hub" aria-labelledby="home-hub-heading">
        <h2 id="home-hub-heading" className="sr-only">
          {siteContent.brand.name}
        </h2>
        <ul className="home-hub__list">
          {hubLinks.map((link, index) => (
            <li key={link.href}>
              <RevealOnScroll delayMs={index * 80}>
                <Link href={link.href} className="home-hub__link">
                  {link.name}
                </Link>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
