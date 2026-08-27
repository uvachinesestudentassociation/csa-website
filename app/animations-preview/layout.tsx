import type { Metadata } from "next"
import "./preview.css"

export const metadata: Metadata = {
  title: "Animations preview",
  robots: { index: false, follow: false },
}

export default function AnimationsPreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
