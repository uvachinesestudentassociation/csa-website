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
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <Image
        src="/images/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover home-kenburns"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0505]/90 via-[#4a0a0a]/45 to-[#1a0505]/25" />

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col justify-end px-6 pb-16 pt-24 md:px-12 md:pb-20 lg:px-16">
        <div className="max-w-3xl space-y-5">
          <h1 className="home-rise mb-0 font-display text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
            CSA@UVA
          </h1>
          <p className="home-rise-delay-1 mb-0 max-w-xl text-xl font-medium leading-snug text-white/90 md:text-2xl lg:text-3xl">
            Culture, community, and home on Grounds
          </p>
          <p className="home-rise-delay-2 mb-0 max-w-lg text-base text-white/75 md:text-lg">
            One of UVA&apos;s largest Asian-American cultural organizations — celebrating Chinese heritage and
            welcoming every background in Charlottesville.
          </p>
          <div className="home-rise-delay-3 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Button size="lg" className="cursor-pointer bg-white text-primary hover:bg-white/90" asChild>
              <a href={NEW_FORM} target="_blank" rel="noopener noreferrer">
                New Members Form
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
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
            linkClassName="cursor-pointer text-white/80 transition-colors hover:text-white"
          />
        </div>
      </div>
    </section>
  )
}
