"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { siteContent } from "@/content/site";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mastHeight, setMastHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const { brand, nav, forms } = siteContent;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => setMastHeight(header.offsetHeight);

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!menuOpen) return;

    const header = headerRef.current;
    if (header) {
      setMastHeight(header.offsetHeight);
    }

    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;

    htmlStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    bodyStyle.overflow = "hidden";
    if (scrollbarWidth > 0) {
      bodyStyle.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      htmlStyle.overflow = "";
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.left = "";
      bodyStyle.right = "";
      bodyStyle.width = "";
      bodyStyle.overflow = "";
      bodyStyle.paddingRight = "";
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  return (
    <>
    <header
      ref={headerRef}
      className={cn("site-mast", menuOpen && "site-mast--menu-open")}
    >
      <div className="site-mast__inner">
        <p className="site-mast__eyebrow">{brand.eyebrow}</p>

        <div className="site-mast__brand-row">
          <Link
            href="/"
            className="site-mast__brand"
            onClick={() => setMenuOpen(false)}
          >
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
              {menuOpen ? (
                <X className="h-6 w-6" aria-hidden />
              ) : (
                <Menu className="h-6 w-6" aria-hidden />
              )}
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
        <nav
          id="site-mast-panel"
          className="site-mast__panel md:hidden"
          aria-label="Site"
          style={{ "--mast-height": `${mastHeight}px` } as CSSProperties}
        >
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
    {menuOpen && (
      <div
        className="site-mast__spacer md:hidden"
        style={{ height: mastHeight }}
        aria-hidden
      />
    )}
    </>
  );
}
