import Image from "next/image"
import Link from "next/link"
import { SocialLinks } from "@/components/social-links"
import { siteContent } from "@/content/site"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { brand, footer } = siteContent

  return (
    <footer className="site-footer">
      <p className="site-footer__line">{footer.tagline}</p>

      <div className="site-footer__meta">
        <Link href="/" className="site-footer__brand">
          <Image
            src="/images/csa_tassel_logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-auto"
            aria-hidden
          />
          <span>{brand.name}</span>
        </Link>

        <div className="site-footer__links">
          {footer.links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.name}
            </Link>
          ))}
          <SocialLinks
            iconClassName="h-4 w-4"
            className="gap-3"
            linkClassName="text-[var(--color-footer-muted)] transition-colors hover:text-[var(--color-footer-ink)]"
          />
        </div>

        <p className="site-footer__copy">
          © {currentYear} {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
