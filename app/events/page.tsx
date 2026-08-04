import type { Metadata } from "next"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming CSA@UVA events and activities. Subscribe to our Google Calendar to stay in the loop.",
}

interface CalendarEvent {
  summary: string
  start: Date
  end?: Date
  location?: string
}

function parseDate(value: string): Date {
  if (value.includes("T")) {
    const [date, time] = value.split("T")
    const year = date.slice(0, 4)
    const month = date.slice(4, 6)
    const day = date.slice(6, 8)
    const hour = time.slice(0, 2)
    const minute = time.slice(2, 4)
    const second = time.slice(4, 6)
    const suffix = value.endsWith("Z") ? "Z" : ""
    return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}${suffix}`)
  }

  const year = value.slice(0, 4)
  const month = value.slice(4, 6)
  const day = value.slice(6, 8)
  return new Date(`${year}-${month}-${day}`)
}

function parseICS(text: string): CalendarEvent[] {
  return text
    .split("BEGIN:VEVENT")
    .slice(1)
    .map((block) => {
      const lines = block.split(/\r?\n/)
      const event: CalendarEvent = { summary: "", start: new Date() }
      for (const line of lines) {
        if (line.startsWith("SUMMARY:")) {
          event.summary = line.substring(8).trim()
        } else if (line.startsWith("DTSTART")) {
          const value = line.split(":")[1].trim()
          event.start = parseDate(value)
        } else if (line.startsWith("DTEND")) {
          const value = line.split(":")[1].trim()
          event.end = parseDate(value)
        } else if (line.startsWith("LOCATION:")) {
          event.location = line.substring(9).trim().replace(/\\,/g, ",")
        }
      }
      return event
    })
}

async function getEvents(): Promise<CalendarEvent[]> {
  const res = await fetch(
    "https://calendar.google.com/calendar/ical/c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com/public/full.ics",
    { next: { revalidate: 3600 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch calendar events")
  }

  const ics = await res.text()
  const events = parseICS(ics)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return events.filter((e) => e.start >= today).sort((a, b) => a.start.getTime() - b.start.getTime())
}

export default async function EventsPage() {
  let events: CalendarEvent[] = []
  let fetchError = false

  try {
    events = await getEvents()
  } catch {
    fetchError = true
  }

  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Events</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Stay up to date with our upcoming events. Subscribe to add them to your calendar.
        </p>
        <Button asChild className="mt-4">
          <a
            href="https://calendar.google.com/calendar/u/0?cid=c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </a>
        </Button>
      </div>

      <div className="space-y-6">
        {fetchError ? (
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                Unable to load upcoming events right now. Please check the calendar below or try again later.
              </p>
            </CardContent>
          </Card>
        ) : events.length > 0 ? (
          events.map((event) => (
            <Card key={`${event.summary}-${event.start.toISOString()}`}>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold">{event.summary}</h2>
                <p className="text-sm text-muted-foreground">
                  {format(event.start, "EEEE, MMMM d, yyyy h:mm a")}
                </p>
                {event.location && <p className="text-sm">{event.location}</p>}
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No upcoming events.</p>
        )}
      </div>

      <div className="mt-8 flex justify-center md:hidden">
        <Button asChild size="lg" className="w-full max-w-sm">
          <a
            href="https://calendar.google.com/calendar/u/0?cid=c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Calendar
          </a>
        </Button>
      </div>

      <div className="mt-12 hidden md:block">
        <iframe
          title="CSA Events Calendar"
          src="https://calendar.google.com/calendar/embed?src=c_o0ntjuei84bjmlpfqbcsr62u3c%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
          style={{ border: 0 }}
          className="w-full h-[600px]"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </div>
  )
}
