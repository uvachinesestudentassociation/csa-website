export type IcsEvent = {
  uid: string
  summary: string
  location: string
  startMs: number
  endMs: number
  allDay: boolean
}

export type FeaturedEvent = {
  id: string
  title: string
  location: string
  startMs: number
  allDay: boolean
  dateLabel: string
  timeLabel: string | null
}

export type FeaturedEventFilter = {
  include: readonly string[]
  exclude: readonly string[]
  limit: number
}

/** Unfold ICS line continuations (CRLF + leading space/tab). */
export function unfoldIcs(text: string) {
  return text.replace(/\r\n/g, "\n").replace(/\n[ \t]/g, "")
}

function unescapeIcs(value: string) {
  return value
    .replace(/\\n/gi, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\")
    .trim()
}

function parseIcsDateTime(raw: string, params: string): { ms: number; allDay: boolean } {
  const value = raw.trim()
  const isDate =
    /(?:^|; )VALUE=DATE(?:;|$)/i.test(params) || /^\d{8}$/.test(value)

  if (isDate) {
    const y = Number(value.slice(0, 4))
    const m = Number(value.slice(4, 6)) - 1
    const d = Number(value.slice(6, 8))
    return { ms: Date.UTC(y, m, d), allDay: true }
  }

  const y = Number(value.slice(0, 4))
  const m = Number(value.slice(4, 6)) - 1
  const d = Number(value.slice(6, 8))
  const h = Number(value.slice(9, 11) || "0")
  const mi = Number(value.slice(11, 13) || "0")
  const s = Number(value.slice(13, 15) || "0")

  if (value.endsWith("Z")) {
    return { ms: Date.UTC(y, m, d, h, mi, s), allDay: false }
  }

  // Floating / TZID times: treat as America/New_York wall time via a fixed offset
  // approximation is wrong near DST; prefer Z from Google basic.ics.
  // ponytail: wall-clock without TZDB — Google public ICS usually emits Z.
  const asUtc = Date.UTC(y, m, d, h, mi, s)
  return { ms: asUtc, allDay: false }
}

function field(line: string): { name: string; params: string; value: string } | null {
  const colon = line.indexOf(":")
  if (colon < 0) return null
  const meta = line.slice(0, colon)
  const value = line.slice(colon + 1)
  const semi = meta.indexOf(";")
  const name = (semi < 0 ? meta : meta.slice(0, semi)).toUpperCase()
  const params = semi < 0 ? "" : meta.slice(semi)
  return { name, params, value }
}

export function parseIcsEvents(text: string): IcsEvent[] {
  const lines = unfoldIcs(text).split("\n")
  const events: IcsEvent[] = []
  let current: Partial<IcsEvent> | null = null

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = { uid: "", summary: "", location: "", startMs: 0, endMs: 0, allDay: false }
      continue
    }
    if (!current) continue

    if (line === "END:VEVENT") {
      if (current.summary && current.startMs) {
        const allDay = Boolean(current.allDay)
        const endMs =
          current.endMs && current.endMs > current.startMs
            ? current.endMs
            : allDay
              ? current.startMs + 24 * 60 * 60 * 1000
              : current.startMs + 60 * 60 * 1000
        events.push({
          uid: current.uid || `${current.summary}-${current.startMs}`,
          summary: current.summary,
          location: current.location || "",
          startMs: current.startMs,
          endMs,
          allDay,
        })
      }
      current = null
      continue
    }

    const parsed = field(line)
    if (!parsed) continue

    if (parsed.name === "UID") current.uid = unescapeIcs(parsed.value)
    if (parsed.name === "SUMMARY") current.summary = unescapeIcs(parsed.value)
    if (parsed.name === "LOCATION") current.location = unescapeIcs(parsed.value)
    if (parsed.name === "DTSTART") {
      const { ms, allDay } = parseIcsDateTime(parsed.value, parsed.params)
      current.startMs = ms
      current.allDay = allDay
    }
    if (parsed.name === "DTEND") {
      const { ms, allDay } = parseIcsDateTime(parsed.value, parsed.params)
      current.endMs = ms
      if (allDay) current.allDay = true
    }
  }

  return events
}

function matchesAny(haystack: string, needles: readonly string[]) {
  const h = haystack.toLowerCase()
  return needles.some((n) => h.includes(n.toLowerCase()))
}

export function displayTitle(summary: string) {
  return summary.replace(/^\[[^\]]+\]\s*/u, "").trim()
}

export function shortLocation(location: string) {
  if (!location) return ""
  return location.split(",")[0]?.trim() || location
}

export function formatEventLabels(startMs: number, allDay: boolean, timeZone = "America/New_York") {
  const date = new Date(startMs)
  const dateLabel = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date)

  if (allDay) return { dateLabel, timeLabel: null as string | null }

  const timeLabel = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
  }).format(date)

  return { dateLabel, timeLabel }
}

export function selectFeaturedEvents(
  events: IcsEvent[],
  filter: FeaturedEventFilter,
  now = new Date(),
): FeaturedEvent[] {
  const nowMs = now.getTime()
  return events
    .filter((event) => event.endMs > nowMs)
    .filter((event) => {
      if (filter.exclude.length && matchesAny(event.summary, filter.exclude)) return false
      if (!filter.include.length) return true
      return matchesAny(event.summary, filter.include)
    })
    .sort((a, b) => a.startMs - b.startMs)
    .slice(0, filter.limit)
    .map((event) => {
      const { dateLabel, timeLabel } = formatEventLabels(event.startMs, event.allDay)
      return {
        id: event.uid,
        title: displayTitle(event.summary),
        location: shortLocation(event.location),
        startMs: event.startMs,
        allDay: event.allDay,
        dateLabel,
        timeLabel,
      }
    })
}
