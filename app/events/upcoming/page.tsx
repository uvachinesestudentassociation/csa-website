"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ExternalLink } from "lucide-react"

export default function UpcomingEventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "General Body Meeting",
      date: "May 1, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Ern Commons",
      description: "Join us for our monthly general body meeting to discuss upcoming events and activities.",
    },
    {
      id: 2,
      title: "End of Year Celebration",
      date: "May 10, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Newcomb Ballroom",
      description: "Celebrate the end of the academic year with food, performances, and awards.",
    },
    {
      id: 3,
      title: "Fourth Year Reception",
      date: "May 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Rotunda Multipurpose Room",
      description:
        "Join us in celebrating our graduating fourth-years and wishing them well in their future endeavors.",
    },
  ]

  return (
    <div className="container-custom">
      <div className="section-title">
        <h1>Upcoming Events</h1>
        <p className="max-w-3xl mx-auto text-lg text-center">
          Stay up-to-date with all of our upcoming events and activities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h2>Upcoming Events</h2>

          {upcomingEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="mt-1">{event.location}</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h2>Calendar</h2>
          <Card>
            <CardContent className="pt-6">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />

              <div className="mt-6">
                <Button className="w-full" asChild>
                  <a
                    href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=57265a3a5d&e=f5afb523ef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Subscribe to Google Calendar</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
