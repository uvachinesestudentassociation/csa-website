import type { Metadata } from "next"
import { familiesContent } from "@/content/families"

export const metadata: Metadata = {
  title: familiesContent.meta.title,
  description: familiesContent.meta.description,
}

export default function FamiliesLayout({ children }: { children: React.ReactNode }) {
  return children
}
