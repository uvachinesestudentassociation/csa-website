import type { Metadata } from "next"
import { officersContent } from "@/content/officers"

export const metadata: Metadata = {
  title: officersContent.meta.title,
  description: officersContent.meta.description,
}

export default function OfficersLayout({ children }: { children: React.ReactNode }) {
  return children
}
