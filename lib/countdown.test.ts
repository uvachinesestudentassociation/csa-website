import { describe, expect, it } from "vitest"
import { getCountdownParts, pad2 } from "./countdown"

describe("getCountdownParts", () => {
  it("splits remaining time into days hours minutes seconds", () => {
    const now = new Date("2027-03-20T12:00:00-04:00")
    const target = new Date("2027-03-27T00:00:00-04:00")
    expect(getCountdownParts(now, target)).toEqual({
      days: 6,
      hours: 12,
      minutes: 0,
      seconds: 0,
      done: false,
    })
  })

  it("marks done when target has passed", () => {
    const now = new Date("2027-03-28T00:00:00-04:00")
    const target = new Date("2027-03-27T00:00:00-04:00")
    expect(getCountdownParts(now, target).done).toBe(true)
  })

  it("pads two-digit units", () => {
    expect(pad2(3)).toBe("03")
    expect(pad2(12)).toBe("12")
  })
})
