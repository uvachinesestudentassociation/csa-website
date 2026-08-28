import type { Metadata } from "next"
import { alumniContent } from "@/content/alumni"

export const metadata: Metadata = {
  title: alumniContent.meta.title,
  description: alumniContent.meta.description,
}

export default function AlumniLayout({ children }: { children: React.ReactNode }) {
  return children
}
