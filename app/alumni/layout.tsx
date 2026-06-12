import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alumni",
  description: "Celebrating CSA@UVA alumni and their contributions to our organization.",
}

export default function AlumniLayout({ children }: { children: React.ReactNode }) {
  return children
}
