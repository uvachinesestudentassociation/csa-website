import { describe, expect, it } from "vitest"
import { emphasizePhrases } from "./emphasize"

describe("emphasizePhrases", () => {
  it("returns the text unchanged when phrases is empty", () => {
    expect(emphasizePhrases("hello world", [])).toEqual(["hello world"])
  })

  it("wraps a single matching phrase in a strong segment", () => {
    const result = emphasizePhrases("Join CSA today", ["CSA"])
    expect(result).toContainEqual({ strong: "CSA" })
  })

  it("matches phrases with regex-special characters without throwing", () => {
    expect(() =>
      emphasizePhrases("Welcome to CSA@UVA", ["CSA@UVA"]),
    ).not.toThrow()
    expect(emphasizePhrases("Welcome to CSA@UVA", ["CSA@UVA"])).toContainEqual({
      strong: "CSA@UVA",
    })
  })

  it("keeps non-matching text as plain strings", () => {
    const result = emphasizePhrases("plain text only", ["missing"])
    expect(result).toEqual(["plain text only"])
    expect(result.every((part) => typeof part === "string")).toBe(true)
  })
})
