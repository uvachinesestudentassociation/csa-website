import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Officers",
  description: "Meet the CSA@UVA executive and officer board for the current academic year.",
}

export default function OfficersLayout({ children }: { children: React.ReactNode }) {
  return children
}
