import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { eventsContent } from "@/content/events"

export const metadata: Metadata = {
  title: eventsContent.meta.title,
  description: eventsContent.meta.description,
}

export default function EventsPage() {
  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>{eventsContent.header.title}</h1>
        <p className="mx-auto max-w-3xl text-center text-lg">{eventsContent.header.lede}</p>
      </div>

      <div className="mt-8">
        <iframe
          title={eventsContent.calendar.iframeTitle}
          src={eventsContent.calendar.embedUrl}
          style={{ border: 0 }}
          className="h-[min(70dvh,42rem)] min-h-[28rem] w-full"
          loading="lazy"
        />
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" className="w-full max-w-sm sm:w-auto">
          <a href={eventsContent.calendar.subscribeUrl} target="_blank" rel="noopener noreferrer">
            {eventsContent.actions.subscribe}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full max-w-sm sm:w-auto">
          <a href={eventsContent.calendar.subscribeUrl} target="_blank" rel="noopener noreferrer">
            {eventsContent.actions.openCalendar}
          </a>
        </Button>
      </div>
    </div>
  )
}
