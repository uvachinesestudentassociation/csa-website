import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Families",
  description: "Learn about CSA@UVA's family system and meet this year's families.",
}

export default function FamiliesLayout({ children }: { children: React.ReactNode }) {
  return children
}
