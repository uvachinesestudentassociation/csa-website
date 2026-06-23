"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-provider"

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Families", href: "/families" },
  { name: "Officers", href: "/officers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Archive", href: "/gallery/archive" },
  { name: "Alumni", href: "/alumni" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 pt-[env(safe-area-inset-top)] backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/csa_square_logo.png" alt="CSA@UVA Logo" width={48} height={48} className="h-12 w-auto" />
          <span className="sr-only">CSA@UVA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-semibold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 top-16 z-40 bg-black/40 md:hidden"
            onClick={closeMobileMenu}
          />
          <nav className="fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b bg-background shadow-lg md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="container space-y-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-2 py-3 text-foreground/80 hover:text-primary font-semibold transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
