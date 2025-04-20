"use client"
import "app/globals.css"
import "@fontsource/raleway"

import type React from "react"
import { Grid, Button } from "@mui/material"
import { FaArrowLeftLong } from "react-icons/fa6"
import EventCard from "@components/EventCard"
import ScrollUpButton from "@components/ScrollUpButton"
import Link from "next/link"

const Past2018_2019 = () => {
  const containerStyle: React.CSSProperties = {
    padding: "0 20px",
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  }

  const headerWrapperStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: "20px",
  }

  const headerStyle: React.CSSProperties = {
    flex: 1,
    textAlign: "center",
  }

  const cardStyle: React.CSSProperties = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    height: "auto",
  }

  return (
    <div style={containerStyle}>
      <div style={headerWrapperStyle}>
        <div className="buttons">
          <Link href="/events/past/">
            <Button variant="contained">
              <FaArrowLeftLong />
            </Button>
          </Link>
        </div>
        <div style={{ ...headerStyle }}>
          <h1>2018-2019 Events</h1>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/fourth_year_reception.jpg"
            header="Fourth Year Reception"
            subheading="Apr 28, 2019 | Rotunda MPR"
            text={`Please come join us in the Multipurpose Room in the southwest wing of the Rotunda this Sunday, April 28 from 3-5 PM to say your farewells to the graduating Class of 2019.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/chipotle_fundraiser.jpg"
            header="Chipotle Fundraiser"
            subheading="Apr 23, 2019 | Chipotle at Barracks Road"
            text={`Come eat some spicy refreshing food to help get you through finals season and the end of the semester!!! Make sure to mention CSA to the cashier or show the flyer! 🌯🌮🥙🤩🤩🥳🥰
            Chipotle will donate 33% of proceeds to the Chinese Student Association at the University of Virginia to help promote Chinese culture and bring together a close community of individuals. #LoveChipotle #Chipotle #CSAatUVA #SpicyFood #FinalsSzn #GrindTime #NonSpicyFood`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/april_gbm.jpg"
            header="April GBM"
            subheading="Apr 17, 2019 | Clark 108"
            text={`Come out to CSA's last GBM for the 2018-2019 school year! Who won a superlative? What final events do we have coming up? Come and discover the answers to all of your questions. And most importantly, come out to meet our new officer board. Be there or be square!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/exec_elections.jpg"
            header="Executive Board Elections"
            subheading="Mar 22, 2019 | Clark 108"
            text={`Come out to CSA's Executive Board Elections for 2019-2020!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/march_gbm.jpg"
            header="March GBM"
            subheading="Mar 6, 2019 | Clark 108"
            text={
              "Thought we were done after Chinafest? Well, think again! We still have a lot of events left in store for y'all! Keep up to date with us as we talk about Spring Family Month, elections, and other cool events you don't want to miss out on!!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/chinafest.png"
            header="Chinafest"
            subheading="Feb 16, 2019 | Burley MS"
            text={`Chinafest is CSA's largest annual performance, and brings together the members of our organization, to celebrate the Lunar New Year. Indulge in Chinese culture like you've never before. Our members have been working hard for the past few weeks to prepare this performance, with both traditional and modern acts!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/february_gbm.jpg"
            header="February GBM"
            subheading="Feb 6, 2019 | Clark 107"
            text={
              "Can't believe it's February already? Come be CSA's valentine at our February general body meeting on Wednesday Feb.6th in Clark 107 and learn about everything we have in store for you this month ❤"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/january_gbm.jpg"
            header="January GBM"
            subheading="Jan 16, 2019 | Clark 107"
            text={
              "Welcome back from break everyone~ I hope y'all are well rested and are ready to jump back in with CSA! Come to our January general body meeting this Wednesday (Jan.16th) in Clark 107 to learn about all the upcoming events we have for you!!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/chinafest_showcase.jpg"
            header="Chinafest Showcase"
            subheading="Jan 14, 2019 | O'Hill Forum"
            text={`Chinafest season is almost here! Come to our Chinafest Showcase to preview some of the dances and acts you can participate in for our annual Chinafest performance! Our talented choreographers have been preparing some great dances so this is definitely an event you don't want to miss! GET HYPE!!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/december_gbm.jpg"
            header="December GBM"
            subheading="Dec 5, 2018 | Clark 107"
            text={`Happy Holidays CSA! Come to our December General Meeting to learn about upcoming events, build gingerbread houses, and participate in Secret Santa! Let's finish 2018 off with a bang and some holiday cheer!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/november_gbm.jpg"
            header="November GBM"
            subheading="Nov 7, 2018 | Clark 107"
            text={`Another month, another GBM! You know the drill --- Come to our November General Meeting to find out what we have in store for y'all next! From Boys & Girls Night to Thanksgiving Potluck, you won't wanna miss out on this month's updates!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/mezeh_fundraiser.jpg"
            header="Mezeh Fundraiser"
            subheading="Oct 15, 2018 | Mezeh Charlottesville"
            text={`Join us for dinner at Mezeh Charlottesville and mention CSA at the register or show the flyer! Mezeh will donate 40% of the proceeds to the Chinese Student Association at the University of Virginia's fund to promote and celebrate Chinese culture as well as to build a close community of students brought together by a mutual interest in Chinese culture. #MezehGives #GoMezeh`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/october_gbm.jpg"
            header="October GBM"
            subheading="Oct 10, 2018 | Wilson 301"
            text={`Happy October!! Come through to CSA's October GBM to find out what we have in store for you this month! From FullMoonFest to Humans v. Zombies, find out more details about our events on October 10th in Wilson 301 starting at 7pm!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/first_gbm.jpg"
            header="First GBM"
            subheading="Sep 5, 2018 | Physics 204"
            text={`Come meet our officers, sign up to join a family, and get to know everyone before kicking off another amazing year with CSA at UVA Presents: S'mores Night! right after the meeting!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2018-2019/events/kft_fundraiser.jpg"
            header="Kung Fu Tea Fundraiser"
            subheading="Jun 15, 2018 | Kung Fu Tea Centrevile"
            text={`Tired of the summer heat? Love bubble tea? Join us in supporting CSA @ UVA by stopping by Kung Fu Tea in Centreville anytime of the day! Please make sure to mention CSA at the register before purchasing and share this event with friends :))`}
            style={cardStyle}
          />
        </Grid>
      </Grid>
      <ScrollUpButton />
    </div>
  )
}

export default Past2018_2019
