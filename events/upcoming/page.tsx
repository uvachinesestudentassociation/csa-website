"use client"
import "app/globals.css"
import "@fontsource/raleway"
import { Button } from "@mui/material"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"

function GoogleCalendar() {
  const calendarProps = {
    plugins: [dayGridPlugin, googleCalendarPlugin],
    initialView: "dayGridMonth",
    events: {
      googleCalendarApiKey: "AIzaSyB9OGdxbDWzEKeyxFaWzWhOypnSsmB-uvo",
      googleCalendarId: "c_o0ntjuei84bjmlpfqbcsr62u3c@group.calendar.google.com",
    },
    eventColor: "#8B0000",
    contentHeight: 400,
    fixedWeekCount: false,
  }

  const subscribeToCalendar = () => {
    const googleCalendarSubscribeLink = `https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=57265a3a5d&e=f5afb523ef`
    window.open(googleCalendarSubscribeLink, "_blank")
  }

  return (
    <div className="content">
      <div className="header">
        <h1>Upcoming Events Calendar</h1>
      </div>
      <FullCalendar {...calendarProps} />
      <div className="buttons">
        <Button variant="contained" color="primary" onClick={subscribeToCalendar}>
          Subscribe to Google Calendar
        </Button>
      </div>
    </div>
  )
}

export default GoogleCalendar
