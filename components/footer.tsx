import Image from "next/image"
import { SocialLinks } from "@/components/social-links"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background pb-[env(safe-area-inset-bottom)] dark:bg-background/80">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/csa_tassel_logo.png"
              alt="CSA@UVA Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-semibold text-lg">CSA@UVA</span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks />
            <div className="text-sm text-muted-foreground">
              &copy; {currentYear} Chinese Student Association at UVA. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
