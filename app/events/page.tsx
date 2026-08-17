import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming CSA@UVA events and activities. Subscribe to our Google Calendar to stay in the loop.",
}

const CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/embed?src=c_o0ntjuei84bjmlpfqbcsr62u3c%40group.calendar.google.com&ctz=America%2FNew_York&mode=MONTH"
const CALENDAR_SUBSCRIBE_URL =
  "https://calendar.google.com/calendar/u/0?cid=c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com"

export default function EventsPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Events</h1>
        <p className="mx-auto max-w-3xl text-center text-lg">
          Stay up to date with our upcoming events. Subscribe to add them to your calendar.
        </p>
      </div>

      <div className="mt-8">
        <iframe
          title="CSA Events Calendar"
          src={CALENDAR_EMBED_URL}
          style={{ border: 0 }}
          className="h-[min(70dvh,42rem)] min-h-[28rem] w-full"
          loading="lazy"
        />
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="w-full max-w-sm sm:w-auto">
          <a
            href={CALENDAR_SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full max-w-sm sm:w-auto">
          <a
            href={CALENDAR_SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Calendar
          </a>
        </Button>
      </div>
    </div>
  )
}
