import { describe, expect, it } from "vitest"
import {
  displayTitle,
  parseIcsEvents,
  selectFeaturedEvents,
  shortLocation,
  unfoldIcs,
} from "./ics-events"

const sampleIcs = `BEGIN:VCALENDAR
BEGIN:VEVENT
DTSTART:20261118T230000Z
DTEND:20261119T010000Z
UID:potluck@test
LOCATION:Ern Commons\\, University of Virginia
SUMMARY:[CSA] Thanksgiving Potluck
END:VEVENT
BEGIN:VEVENT
DTSTART:20261203T000000Z
DTEND:20261203T030000Z
UID:gbm@test
SUMMARY:[CSA] December GBM
END:VEVENT
BEGIN:VEVENT
DTSTART:20261205T190000Z
DTEND:20261205T220000Z
UID:dimsum@test
SUMMARY:[CSA] Dollar Dim Sum
END:VEVENT
BEGIN:VEVENT
DTSTART:20270320T180000Z
DTEND:20270320T220000Z
UID:runthrough@test
SUMMARY:CSA Chinafest Runthroughs
END:VEVENT
BEGIN:VEVENT
DTSTART:20270321T180000Z
DTEND:20270321T223000Z
UID:chinafest@test
SUMMARY:CSA Chinafest
END:VEVENT
BEGIN:VEVENT
DTSTART:20250101T180000Z
DTEND:20250101T200000Z
UID:past@test
SUMMARY:[CSA] January GBM
END:VEVENT
END:VCALENDAR`

describe("ics-events", () => {
  it("unfolds continued ICS lines", () => {
    expect(unfoldIcs("LOCATION:Ern Commons\\\n , VA")).toBe("LOCATION:Ern Commons\\, VA")
  })

  it("parses events and strips bracket tags", () => {
    const events = parseIcsEvents(sampleIcs)
    expect(events).toHaveLength(6)
    expect(displayTitle(events[0]!.summary)).toBe("Thanksgiving Potluck")
    expect(shortLocation(events[0]!.location)).toBe("Ern Commons")
  })

  it("keeps upcoming included events and drops runthroughs / past", () => {
    const featured = selectFeaturedEvents(
      parseIcsEvents(sampleIcs),
      {
        include: ["gbm", "dim sum", "chinafest", "potluck"],
        exclude: ["runthrough", "setup"],
        limit: 5,
      },
      new Date("2026-11-15T17:00:00Z"),
    )

    expect(featured.map((e) => e.title)).toEqual([
      "Thanksgiving Potluck",
      "December GBM",
      "Dollar Dim Sum",
      "Chinafest",
    ])
  })
})
