"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MobileNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  return (
    <div className="md:hidden flex items-center justify-between p-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/csa_square_logo.png" alt="CSA@UVA Logo" width={48} height={48} className="h-12 w-auto" />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {navLinks.map((link) =>
            link.dropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="w-full flex items-center justify-between px-2 py-1.5 text-sm">
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
              <DropdownMenuItem key={link.name} asChild>
                <Link href={link.href} className="w-full">
                  {link.name}
                </Link>
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
