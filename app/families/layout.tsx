import type { Metadata } from "next"
import { Noto_Serif_SC } from "next/font/google"
import { familiesContent } from "@/content/families"

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-palace",
  display: "block",
  preload: true,
})

export const metadata: Metadata = {
  title: familiesContent.meta.title,
  description: familiesContent.meta.description,
}

export default function FamiliesLayout({ children }: { children: React.ReactNode }) {
  return <div className={notoSerifSC.variable}>{children}</div>
}
