import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to CSA@UVA — the Chinese Student Association at the University of Virginia, promoting Chinese culture on grounds and in Charlottesville.",
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1400px"
          className="object-cover"
          aria-hidden
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Welcome to CSA!</h1>
        </div>

        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
          <Card className="bg-white/95 dark:bg-card/95 backdrop-blur shadow-lg">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg md:text-xl text-center mb-6">
                The Chinese Student Association at the University of Virginia (CSA@UVA), as one of the largest
                Asian-American cultural organizations on grounds, seeks to promote awareness and appreciation for
                Chinese culture within the University and greater Charlottesville community.
              </p>

              <SocialLinks
                iconClassName="h-8 w-8"
                className="justify-center gap-6 mb-8"
                linkClassName="text-primary hover:text-primary/80 transition-colors"
              />

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <a
                    href="https://docs.google.com/forms/d/11_qaSL1IiBrtmic8Z_uvV28ASoNvcUp2JaCFi7mtRVk/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Returning Members Form
                  </a>
                </Button>
                <Button size="lg" asChild>
                  <a
                    href="https://docs.google.com/forms/d/1IJpfdlxr7xssdubWsDVTqSrGaAiJyIdtcGHYZXeInhw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    New Members Form
                  </a>
                </Button>
              </div>

              <div className="mt-4 flex justify-center">
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://facebook.us20.list-manage.com/subscribe?u=5df38cf096c70a0a7d9613210&id=a7ebb0ef17"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe to Our Newsletter
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
