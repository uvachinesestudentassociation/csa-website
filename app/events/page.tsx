import type { Metadata } from "next"
import { eventsContent } from "@/content/events"

export const metadata: Metadata = {
  title: eventsContent.meta.title,
  description: eventsContent.meta.description,
}

export default function EventsPage() {
  const { header, actions, calendar } = eventsContent

  return (
    <div className="events-page">
      <header className="events-page__header">
        <div className="events-page__intro">
          <h1 className="events-page__title">{header.title}</h1>
          <p className="events-page__lede">{header.lede}</p>
        </div>
        <div className="events-page__actions">
          <a
            className="events-page__subscribe"
            href={calendar.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {actions.subscribe}
          </a>
          <a
            className="events-page__open"
            href={calendar.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {actions.openCalendar}
          </a>
        </div>
      </header>

      <figure className="events-page__calendar">
        <iframe
          title={calendar.iframeTitle}
          src={calendar.embedUrl}
          className="events-page__frame"
          loading="lazy"
        />
        <figcaption className="events-page__caption">{calendar.caption}</figcaption>
      </figure>
    </div>
  )
}
