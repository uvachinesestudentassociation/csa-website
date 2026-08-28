import type { Metadata } from "next"
import { SocialLinks } from "@/components/social-links"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { HomeHeroMedia } from "@/components/home-hero-media"
import { previewAssets } from "@/app/animations-preview/assets"
import { homeContent } from "@/content/home"
import { siteContent } from "@/content/site"

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
}

export default function Home() {
  const { hero, join } = homeContent
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
          <SocialLinks
            iconClassName="h-5 w-5"
            className="gap-5 pt-5 home-rise-delay-2"
            linkClassName="cursor-pointer text-white/75 transition-colors hover:text-white"
          />
        </div>
      </section>

      <section className="home-join-fold" aria-labelledby="home-join">
        <div className="home-join-fold__inner">
          <div>
            <RevealOnScroll>
              <h2 id="home-join" className="home-join-fold__title">
                {join.title}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delayMs={140}>
              <p className="home-join-fold__body">{join.body}</p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delayMs={220} className="home-join-fold__actions">
            <a
              className="home-join-fold__primary"
              href={forms.newMember}
              target="_blank"
              rel="noopener noreferrer"
            >
              {join.ctaNew}
            </a>
            <a
              className="home-join-fold__link"
              href={forms.returningMember}
              target="_blank"
              rel="noopener noreferrer"
            >
              {join.ctaReturning}
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
