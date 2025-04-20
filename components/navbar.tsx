"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// Add theme toggle to navbar
import { ThemeToggle } from "@/components/theme-provider"

const navLinks = [
  { name: "About", href: "/about" },
  {
    name: "Events",
    href: "#",
    dropdown: true,
    items: [
      { name: "Upcoming", href: "/events/upcoming" },
      { name: "Past", href: "/events/past" },
    ],
  },
  { name: "Families", href: "/families" },
  { name: "Officers", href: "/officers" },
  {
    name: "Gallery",
    href: "/gallery",
    dropdown: true,
    items: [{ name: "Archive", href: "/gallery/archive" }],
  },
  { name: "Alumni", href: "/alumni" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/csa_square_logo.png" alt="CSA@UVA Logo" width={48} height={48} className="h-12 w-auto" />
          <span className="sr-only">CSA@UVA</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 font-semibold">
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={link.href} className="w-full">
                      All {link.name}
                    </Link>
                  </DropdownMenuItem>
                  {link.items?.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ),
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b",
          mobileMenuOpen ? "max-h-[500px] border-border" : "max-h-0 border-transparent",
        )}
      >
        <div className="container py-4 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name} className="space-y-2">
              {link.dropdown ? (
                <>
                  <Link
                    href={link.href}
                    className="block text-foreground/80 hover:text-primary font-semibold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  <div className="pl-4 space-y-2 border-l-2 border-muted">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-foreground/70 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block text-foreground/80 hover:text-primary font-semibold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
