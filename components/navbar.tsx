"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { siteContent } from "@/content/site"

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { brand, nav, forms } = siteContent

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  return (
    <header className="site-mast">
      <div className="site-mast__inner">
        <p className="site-mast__eyebrow">{brand.eyebrow}</p>

        <div className="site-mast__brand-row">
          <Link href="/" className="site-mast__brand" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/csa_square_logo.png"
              alt=""
              width={48}
              height={48}
              className="site-mast__logo"
              aria-hidden
            />
            <span className="site-mast__title">{brand.name}</span>
          </Link>

          <div className="site-mast__tools">
            <ThemeToggle />
            <button
              type="button"
              className="site-mast__menu-btn md:hidden"
              aria-expanded={menuOpen}
              aria-controls="site-mast-panel"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
              <span className="sr-only">
                {menuOpen ? nav.closeMenuLabel : nav.openMenuLabel}
              </span>
            </button>
          </div>
        </div>

        <nav className="site-mast__links" aria-label="Primary">
          <ul>
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(pathname === link.href && "is-active")}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                className="site-mast__join"
                href={forms.newMember}
                target="_blank"
                rel="noopener noreferrer"
              >
                {nav.joinLabel}
              </a>
            </li>
          </ul>
        </nav>

        <hr className="site-mast__rule" aria-hidden />
      </div>

      {menuOpen && (
        <nav id="site-mast-panel" className="site-mast__panel md:hidden" aria-label="Site">
          <div className="site-mast__panel-inner">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(pathname === link.href && "is-active")}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={forms.newMember}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              {nav.joinMobileLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
