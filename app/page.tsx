import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SocialLinks } from "@/components/social-links"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { homeContent } from "@/content/home"
import { siteContent } from "@/content/site"

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
}

export default function Home() {
  const { hero, welcome, photoBand, join } = homeContent
  const { forms } = siteContent

  return (
    <div>
      <section className="home-photo-fold" aria-label="CSA@UVA">
        <Image
          src="/images/background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div className="home-photo-fold__scrim" aria-hidden />
        <div className="home-photo-fold__caption">
          <p className="home-photo-fold__place home-rise">{hero.place}</p>
          <h1 className="home-photo-fold__brand home-rise-delay-1">{hero.headline}</h1>
          <div className="home-photo-fold__actions home-rise-delay-2">
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

      <section className="home-text-fold" aria-labelledby="home-welcome">
        <div className="home-text-fold__grid">
          <div>
            <RevealOnScroll>
              <h2 id="home-welcome" className="home-text-fold__title">
                {welcome.title}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delayMs={140}>
              <p className="home-text-fold__body">{welcome.body}</p>
            </RevealOnScroll>
          </div>
          <ul className="home-text-fold__list">
            {welcome.destinations.map((item, index) => (
              <RevealOnScroll key={item.href} as="li" delayMs={index * 120}>
                <Link href={item.href}>
                  <span>{item.label}</span>
                  <em>{item.note}</em>
                </Link>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-photo-band" aria-label="Chinafest">
        <Image
          src="/images/gallery/chinafest_dragon_justin_2023.JPG"
          alt={photoBand.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="home-photo-fold__scrim" aria-hidden />
        <RevealOnScroll as="p" className="home-photo-band__caption">
          {photoBand.caption}
        </RevealOnScroll>
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
