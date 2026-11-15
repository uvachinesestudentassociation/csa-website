import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { sponsorsEnabled } from "@/content/sponsors-nav"
import { sponsorsContent } from "@/content/sponsors"

export const metadata: Metadata = {
  title: sponsorsContent.meta.title,
  description: sponsorsContent.meta.description,
  robots: sponsorsEnabled ? undefined : { index: false, follow: false },
}

function ArtSlot({ label }: { label: string }) {
  return (
    <div className="sponsors-page__art" aria-label={label}>
      <span className="sponsors-page__art-label">{label}</span>
    </div>
  )
}

export default function SponsorsPage() {
  if (!sponsorsEnabled) notFound()

  const { header, art, showcase, why, recruit, sponsors } = sponsorsContent

  return (
    <div className="sponsors-page">
      <header className="sponsors-page__header">
        <div className="sponsors-page__header-copy">
          <p className="sponsors-page__year">{header.year}</p>
          <h1 className="sponsors-page__title">{header.title}</h1>
          <p className="sponsors-page__lede">{header.lede}</p>
        </div>
        <ArtSlot label={art.headerLabel} />
      </header>

      <section aria-labelledby="sponsors-showcase-title">
        <RevealOnScroll className="sponsors-page__showcase">
          <div className="sponsors-page__showcase-layout">
            <div className="sponsors-page__showcase-main">
              <div className="sponsors-page__section-head">
                <h2 id="sponsors-showcase-title" className="sponsors-page__section-title">
                  {showcase.title}
                </h2>
                <p className="sponsors-page__section-lede">{showcase.lede}</p>
              </div>

              <ul className="sponsors-page__grid">
                {sponsors.map((sponsor) => (
                  <li key={sponsor.id} className="sponsors-page__item">
                    <a
                      className="sponsors-page__card"
                      href={sponsor.href}
                      target={sponsor.href.startsWith("http") ? "_blank" : undefined}
                      rel={sponsor.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      <span className="sponsors-page__logo">
                        <Image
                          src={sponsor.logoSrc}
                          alt={sponsor.logoAlt}
                          width={480}
                          height={240}
                          unoptimized
                          className="sponsors-page__logo-img"
                        />
                      </span>
                      <span className="sponsors-page__name">{sponsor.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ArtSlot label={art.partnersLabel} />
          </div>
        </RevealOnScroll>
      </section>

      <section className="sponsors-page__bottom" aria-label="Why sponsor and become a sponsor">
        <RevealOnScroll className="sponsors-page__bottom-inner" delayMs={60}>
          <div className="sponsors-page__why" aria-labelledby="sponsors-why-title">
            <h2 id="sponsors-why-title" className="sponsors-page__section-title">
              {why.title}
            </h2>
            <ul className="sponsors-page__points">
              {why.points.map((point) => (
                <li key={point.title} className="sponsors-page__point">
                  <h3 className="sponsors-page__point-title">{point.title}</h3>
                  <p className="sponsors-page__point-body">{point.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="sponsors-page__recruit" aria-labelledby="sponsors-recruit-title">
            <h2 id="sponsors-recruit-title" className="sponsors-page__recruit-title">
              {recruit.title}
            </h2>
            <p className="sponsors-page__recruit-lede">{recruit.lede}</p>
            <a className="sponsors-page__cta" href={recruit.ctaHref}>
              <span>{recruit.cta}</span>
              <span className="sponsors-page__cta-mark" aria-hidden>
                →
              </span>
            </a>
            <p className="sponsors-page__note">{recruit.note}</p>
          </div>
        </RevealOnScroll>
      </section>

      <ArtSlot label={art.footerLabel} />
    </div>
  )
}
