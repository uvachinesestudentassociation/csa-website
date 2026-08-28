import familiesData from "./families-data.json"
import { familiesContent } from "@/content/families"
import { getFamiliesClientPayload, type FamilyPublic } from "./get-families-payload"
import { FamiliesView } from "./families-view"

export default function FamiliesPage() {
  const payload = getFamiliesClientPayload({
    revealed: familiesContent.revealed,
    isDev: process.env.NODE_ENV === "development",
    families: familiesData as FamilyPublic[],
  })
  return <FamiliesView payload={payload} />
}
