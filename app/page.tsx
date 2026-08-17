import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to CSA@UVA — the Chinese Student Association at the University of Virginia, promoting Chinese culture on grounds and in Charlottesville.",
}

const RETURNING_FORM =
  "https://docs.google.com/forms/d/11_qaSL1IiBrtmic8Z_uvV28ASoNvcUp2JaCFi7mtRVk/viewform"
const NEW_FORM =
  "https://docs.google.com/forms/d/1IJpfdlxr7xssdubWsDVTqSrGaAiJyIdtcGHYZXeInhw/viewform"

export default function Home() {
  return (
    <section className="home-hero relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <Image
        src="/images/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover home-kenburns"
        aria-hidden
      />
      <div className="home-hero__scrim absolute inset-0" aria-hidden />

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col justify-end px-6 pb-16 pt-24 md:px-12 md:pb-20 lg:px-16">
        <div className="max-w-3xl space-y-5">
          <h1 className="home-hero__title home-rise mb-0 font-display text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
            CSA@UVA
          </h1>
          <p className="home-hero__lede home-rise-delay-1 mb-0 max-w-xl text-xl font-medium leading-snug md:text-2xl lg:text-3xl">
            Culture, community, and home on Grounds
          </p>
          <p className="home-hero__body home-rise-delay-2 mb-0 max-w-lg text-base md:text-lg">
            One of UVA&apos;s largest Asian-American cultural organizations — celebrating Chinese heritage and
            welcoming every background in Charlottesville.
          </p>
          <div className="home-rise-delay-3 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Button size="lg" className="home-hero__cta-primary cursor-pointer" asChild>
              <a href={NEW_FORM} target="_blank" rel="noopener noreferrer">
                New Members Form
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="home-hero__cta-secondary cursor-pointer"
              asChild
            >
              <a href={RETURNING_FORM} target="_blank" rel="noopener noreferrer">
                Returning Members
              </a>
            </Button>
          </div>
          <SocialLinks
            iconClassName="h-6 w-6"
            className="gap-5 pt-2"
            linkClassName="home-hero__social cursor-pointer transition-colors"
          />
        </div>
      </div>
    </section>
  )
}
