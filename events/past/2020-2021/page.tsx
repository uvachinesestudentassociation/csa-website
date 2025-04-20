"use client"
import "app/globals.css"
import "@fontsource/raleway"

import type React from "react"
import { Grid, Button } from "@mui/material"
import { FaArrowLeftLong } from "react-icons/fa6"
import EventCard from "@components/EventCard"
import ScrollUpButton from "@components/ScrollUpButton"
import Link from "next/link"

const Past2020_2021 = () => {
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
    height: "100%",
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
          <h1>2020-2021 Events</h1>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/fourth_year_reception.jpg"
            header="Fourth Year Reception"
            subheading="May 15, 2021 | Zoom"
            text={`Let's all say farewell to our graduating CSA members!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/april_gbm.jpg"
            header="April GBM"
            subheading="Apr 21, 2021 | Zoom"
            text={`Come out to CSA's last GBM for the 2020-21 school year and meet your new officer board! Hope to see you there!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/exec_elections.jpg"
            header="Executive Board Elections"
            subheading="Mar 26, 2021 | Zoom"
            text={`Come out to CSA's Executive Board Elections for 2021-2022!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/spring_family_month.jpg"
            header="Spring Family Month"
            subheading="Mar 19 - Apr 2, 2021 | Online + In-Person"
            text={`WELCOME to SPRING FAMILY MONTH! Chill with your families after the craziness of Chinafest and participate in our many activities! We have both virtual and in person options, and everyone is encouraged to come, both new or current general members!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/chinafest.jpg"
            header="Chinafest"
            subheading="Mar 13, 2021 | Zoom"
            text={`Chinafest is CSA's largest annual performance, and brings together the members of our organization, to celebrate the Lunar New Year. Indulge in Chinese culture like you've never before. Our members have been working hard for the past few weeks to prepare this performance, with both traditional and modern acts!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/march_gbm.jpg"
            header="March GBM"
            subheading="Mar 3, 2021 | Zoom"
            text={`We have many exciting events coming up this month, including Chinafest and Spring Family Month!! Come out to our general body meeting to learn more 🍀`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/jeopardy_night.jpg"
            header="Jeopardy Night"
            subheading="Feb 20, 2021 | Zoom"
            text={
              "Come out to play some CSA/UVA themed Jeopardy! We'll play in teams of five but you do not need a team to sign up! There will be a prize of $50 for the winning team!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/mytie.jpg"
            header="MyTie"
            subheading="Feb 13, 2021 | Zoom"
            text={
              "Sign up to participate in MyTie - you will be paired with another member to play games against other pairs!! The winning pair will each receive a $10 GrubHub gift card :))"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/resume_review.jpg"
            header="Resume Review"
            subheading="Feb 6, 2021 | Discord"
            text={
              "Come out to our resume workshop to get your resume reviewed by fellow CSA members and alumni! We hope you all take advantage of this opportunity to expand your knowledge and learn from others in our community!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/february_gbm.jpg"
            header="February GBM"
            subheading="Feb 3, 2021 | Zoom"
            text={
              "We hope everyone had a restful and safe winter break!! Come out to our first general meeting of the semester to learn about upcoming events and see some familiar faces ♥"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/chinafest_showcase.jpg"
            header="Chinafest Showcase"
            subheading="Feb 1, 2021 | Zoom"
            text={
              "Chinafest season is almost here! Come to our Chinafest Showcase to preview some of the dances and acts you can participate in for our annual Chinafest performance, which will be online this year! Our talented choreographers have been preparing some great dances so this is definitely an event you don't want to miss!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/masterclass_mondays.jpg"
            header="Masterclass Mondays"
            subheading="Dec 21, 2020 - Jan 25, 2021 | Zoom"
            text={
              "Come out to Masterclass Mondays to learn new skills, recipes, and quarantine activities from members of the CSA community! Classes will be held on zoom every Monday from December 21st to January 25th!! Hope to see you there :))"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/drawing_night.jpg"
            header="Drawing Night"
            subheading="Nov 20, 2020 | Zoom"
            text={`Come out to *drawing night* hosted by your PR chairs to learn how to draw your family animals!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/advising_panel.jpg"
            header="Advising Panel"
            subheading="Nov 9, 2020 | Zoom"
            text={`Do you have any burning questions about your major? Don't know what kind of courses you should take, or when you should start looking into internships? How about if you're curious about gap years or study abroad? If you are searching for these answers, make sure to come out to our Advising Panel on Monday, November 9th 2020 from 7 to 9pm, hosted by CSA 4th years, 3rd years, and family heads!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/donuts_apples_fundraiser.jpg"
            header="Apple Cider Donuts and Caramel Apples Fundraiser"
            subheading="Nov 5-15, 2020 | Charlottesville, VA"
            text={`Don’t know how to show appreciation to your loved ones this Thanksgiving? We got you! Send your thanks with some fresh apple cider donuts, classic caramel apples, and caramel apples with sprinkles! A portion of the proceeds will be donated to the COVID-19 Solidarity Response Fund for WHO. All apples and donuts will be available for pickup/delivery in the Charlottesville area.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/november_gbm.jpg"
            header="November GBM"
            subheading="Nov 4, 2020 | Zoom"
            text={`Come out to the last general meeting of the semester to reminisce about spoopy season and hear about upcoming events this month! We hope to see you all there!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/bone_battle.jpg"
            header="Bone Battle"
            subheading="Oct 19-23, 2021 | Virtual"
            text={`Community is excited to present our week-long virtual scavenger hunt with a twist! Use your craniums and bash them together against other families to see which family has the strongest and biggest brains. Each day will feature a different theme and method of earning points! We’ll also award the highest individual scorers with some prizes. The winning family will receive something special... and acknowledgement that they are the Bone Kings/Queen!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/midautumn_talent_show.jpg"
            header="Mid-Autumn Talent Show"
            subheading="Oct 17, 2020 | Zoom"
            text={`As the Autumn season approaches, CSA wants to hold an event to celebrate the end of the Autumn harvest. This organization will host a talent show to showcase everyone’s unique skills while also keeping everyone safe! From Chinese dancing to 葫芦丝 (cucurbit flute) playing, CSA will compile videos that students send of their special talents to present to a large audience virtually. This exciting event will take place on October 17th, 2020 over Zoom!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/october_gbm.jpg"
            header="October GBM"
            subheading="Oct 7, 2020 | Zoom"
            text={`Come out to our October GBM to hear about exciting events coming up this month, including our Mid-Autumn Talent Show! We hope to see you there!`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/fall_family_week.jpg"
            header="Fall Family Week"
            subheading="Sep 12-26, 2020 | Virutal + In-Person"
            text={`Welcome to Fall Family Week, 2020 Hybrid edition! We have lots of fun in-person and online events planned out for FFW so we hope to see you guys come out!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/meet_the_parents.jpg"
            header="Meet the Parents"
            subheading="Sep 11, 2020 | Zoom"
            text={`Come meet your family and meet new friends at Meet the Parents on Friday, 9/11, at 7 PM! Your family heads are excited to meet all of you! Come prepared to play some icebreakers and have fun competition!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2020-2021/events/first_gbm.jpg"
            header="First GBM"
            subheading="Sep 9, 2020 | Zoom"
            text={`Come meet our officer board, sign up to join a family, and find out about upcoming events! The Chinese Student Association (CSA) at the University of Virginia is a social and cultural student organization. We exist to both promote and spread awareness of Chinese culture, and you do NOT have to be Chinese or Chinese-American to have a great time with us. We welcome everyone and anyone to join our organization! We hope to see you there!`}
            style={cardStyle}
          />
        </Grid>
      </Grid>
      <ScrollUpButton />
    </div>
  )
}

export default Past2020_2021
