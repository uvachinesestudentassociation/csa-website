import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { socialLinks } from "@/lib/social-links"
import { cn } from "@/lib/utils"

const icons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
} as const

interface SocialLinksProps {
  iconClassName?: string
  className?: string
  linkClassName?: string
}

export function SocialLinks({
  iconClassName = "h-5 w-5",
  className,
  linkClassName = "text-foreground/70 hover:text-primary transition-colors",
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.icon]
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label={link.label}
          >
            <Icon className={iconClassName} />
          </Link>
        )
      })}
    </div>
  )
}
