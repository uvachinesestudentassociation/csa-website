import Link from "next/link"
import { emphasizePhrases } from "@/content/emphasize"

type EmphasizedParagraphProps = {
  text: string
  phrases: readonly string[]
  links?: Record<string, string>
  className?: string
}

export function EmphasizedParagraph({
  text,
  phrases,
  links,
  className,
}: EmphasizedParagraphProps) {
  const parts = emphasizePhrases(text, phrases)

  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (typeof part === "string") {
          return <span key={i}>{part}</span>
        }

        const href = links?.[part.strong]
        const strong = <strong className="font-semibold">{part.strong}</strong>

        if (href) {
          return (
            <Link
              key={i}
              href={href}
              className="underline-offset-2 hover:underline"
            >
              {strong}
            </Link>
          )
        }

        return strong
      })}
    </p>
  )
}
