import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MistCloudOverlay } from "@/components/mist-cloud-overlay"
import { sponsorsEnabled } from "@/content/sponsors-nav"
import { sponsorsContent, type Sponsor } from "@/content/sponsors"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: sponsorsContent.meta.title,
  description: sponsorsContent.meta.description,
  robots: sponsorsEnabled ? undefined : { index: false, follow: false },
}

function SponsorTile({
  sponsor,
  variant = "wall",
}: {
  sponsor: Sponsor
  variant?: "wall" | "venue"
}) {
  return (
    <li
      className={cn(
        "sponsors-page__item",
        variant === "venue" && "sponsors-page__item--venue",
      )}
    >
      <a
        className={cn(
          "sponsors-page__tile",
          variant === "venue" && "sponsors-page__tile--venue",
        )}
        href={sponsor.href}
        target={sponsor.href.startsWith("http") ? "_blank" : undefined}
        rel={sponsor.href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <span className="sponsors-page__logo">
          <Image
            src={sponsor.logoSrc}
            alt={sponsor.logoAlt}
            width={560}
            height={280}
            unoptimized
            className="sponsors-page__logo-img"
          />
        </span>
        <span className="sponsors-page__name">{sponsor.name}</span>
      </a>
    </li>
  )
}

export default function SponsorsPage() {
  if (!sponsorsEnabled) notFound()

  const { header, partners, venues, why, recruit, sponsors, fundraiserHosts } = sponsorsContent

  return (
    <div className="sponsors-page">
      <header className="sponsors-page__hero">
        <MistCloudOverlay tone="paper" className="sponsors-page__mist" />
        <div className="sponsors-page__hero-stage">
          <p className="sponsors-page__year-rail" aria-label={`Academic year ${header.year}`}>
            <span className="sponsors-page__year-rail-text">{header.year}</span>
          </p>
          <div className="sponsors-page__hero-main">
            <h1 className="sponsors-page__title">
              <span className="sponsors-page__title-ink">{header.title}</span>
            </h1>
            <div className="sponsors-page__hero-lacquer" aria-hidden />
            {header.lede ? (
              <p className="sponsors-page__lede">{header.lede}</p>
            ) : null}
          </div>
        </div>
      </header>

      <section className="sponsors-page__band" aria-labelledby="sponsors-partners-title">
        <div className="sponsors-page__section-head">
          <h2 id="sponsors-partners-title" className="sponsors-page__section-title">
            {partners.title}
          </h2>
          {partners.lede ? (
            <p className="sponsors-page__section-lede">{partners.lede}</p>
          ) : null}
        </div>
        <ul className="sponsors-page__mosaic">
          {sponsors.map((sponsor) => (
            <SponsorTile key={sponsor.id} sponsor={sponsor} />
          ))}
        </ul>
      </section>

      <section className="sponsors-page__venues" aria-labelledby="sponsors-venues-title">
        <div className="sponsors-page__venues-inner">
          <div className="sponsors-page__section-head sponsors-page__section-head--on-ink">
            <h2 id="sponsors-venues-title" className="sponsors-page__section-title">
              {venues.title}
            </h2>
            {venues.lede ? (
              <p className="sponsors-page__section-lede">{venues.lede}</p>
            ) : null}
          </div>
          <ul className="sponsors-page__venue-grid">
            {fundraiserHosts.map((sponsor) => (
              <SponsorTile key={sponsor.id} sponsor={sponsor} variant="venue" />
            ))}
          </ul>
        </div>
      </section>

      <section className="sponsors-page__bottom" aria-label="Why sponsor and become a sponsor">
        <div className="sponsors-page__bottom-inner">
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
            {recruit.lede ? (
              <p className="sponsors-page__recruit-lede">{recruit.lede}</p>
            ) : null}
            {recruit.ctaEnabled ? (
              <a className="sponsors-page__cta" href={recruit.ctaHref}>
                <span>{recruit.cta}</span>
                <span className="sponsors-page__cta-mark" aria-hidden>
                  →
                </span>
              </a>
            ) : (
              <span
                className="sponsors-page__cta sponsors-page__cta--soon"
                aria-disabled="true"
                title="Coming soon"
              >
                <span>{recruit.cta}</span>
                <span className="sponsors-page__cta-mark" aria-hidden>
                  →
                </span>
              </span>
            )}
            {recruit.note ? <p className="sponsors-page__note">{recruit.note}</p> : null}
          </div>
        </div>
      </section>
    </div>
  )
}
