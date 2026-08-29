import type { Metadata } from "next"
import { HomeHeroMedia } from "@/components/home-hero-media"
import { previewAssets } from "@/app/animations-preview/assets"
import { homeContent } from "@/content/home"
import { siteContent } from "@/content/site"

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
}

export default function Home() {
  const { hero } = homeContent
  const { forms } = siteContent

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
    </div>
  )
}
