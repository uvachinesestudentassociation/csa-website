"use client"
import "app/globals.css"
import "@fontsource/raleway"

import type React from "react"
import { Grid, Button } from "@mui/material"
import { FaArrowLeftLong } from "react-icons/fa6"
import EventCard from "@components/EventCard"
import ScrollUpButton from "@components/ScrollUpButton"
import Link from "next/link"

const Past2019_2020 = () => {
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
          <h1>2019-2020 Events</h1>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/fourth_year_reception.png"
            header="Fourth Year Reception"
            subheading="May 20, 2020 | Zoom"
            text={`Come out to say your farewells to the graduating Class of 2020! Although we are unable to say our goodbyes in person, we hope everyone can join us to celebrate our fourth years through zoom ♡`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/exec_elections.jpg"
            header="Executive Board Elections"
            subheading="Mar 20, 2020 | Zoom"
            text={`Come out to CSA's Executive Board Elections for 2020-2021!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/panera_fundraiser.jpg"
            header="Panera Fundraiser"
            subheading="Mar 19, 2020 | Panera Bread Charlottesville"
            text={`Come out to the last fundraiser with your Fundraising/old officers!! :)) Share some mems and eat some yummy food before we get the new board ohoho **Make sure to show the flyer at the register!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/march_gbm.jpg"
            header="March GBM"
            subheading="Mar 4, 2020 | Minor 125"
            text={`Thought we were done after Chinafest? Well, think again! We still have a lot of events left in store for you all, so come on out to March GBM to learn all about them! Keep up to date with us as we talk about Spring Family Month, elections, and other cool events you don't want to miss out on!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/mytie.jpg"
            header="MyTie"
            subheading="Feb 28, 2020 | Runk Green Room"
            text={
              "~Spring~ into the new season and get to know someone new from either CSA or KSA! Through a semi-random process, girls and boys will be paired together and will play a series of mini games for a chance to win a 𝗳𝗿𝗲𝗲 𝗱𝗶𝗻𝗻𝗲𝗿! Afterwards, head on out to any of Charlottesville's amazing restaurants to spend some time with your newfound friend 🙂"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/chinafest.jpg"
            header="Chinafest"
            subheading="Feb 22, 2020 | Burley MS"
            text={`Chinafest is CSA's largest annual performance, and brings together the members of our organization, to celebrate the Lunar New Year. Indulge in Chinese culture like you've never before. Our members have been working hard for the past few weeks to prepare this performance, with both traditional and modern acts!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/february_gbm.jpg"
            header="February GBM"
            subheading="Feb 5, 2020 | Wilson 301"
            text={
              "Come be CSA's valentine at our February General Body Meeting to learn more about all the events coming up ~ ♥"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/david_feng.jpg"
            header="Mentalist and Magician David Feng"
            subheading="Jan 17, 2020 | Newcomb Theatre"
            text={
              "Come kickstart the beginning of the new semester at a show featuring a special guest, mentalist and magician David Feng! David Feng, who graduated from UVA in 2015, will be performing magic, as well as talking about his unique journey on how he became a magician. As an award-winning Asian-American magician, David is especially passionate in sharing his work of magic with the Asian community."
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/january_gbm.jpg"
            header="January GBM"
            subheading="Jan 15, 2020 | Ern Commons"
            text={
              "Hope everyone enjoyed and had a restful break! Bet you miss CSA a bit so come join us for CSA's first general body meeting of the new decade! Come for our fun icebreaker and learn more about our upcoming events for this month!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/chinafest_showcase.jpg"
            header="Chinafest Showcase"
            subheading="Jan 13, 2020 | O'Hill Forum"
            text={`Chinafest season is almost here! Come to our Chinafest Showcase to preview some of the dances and acts you can participate in for our annual Chinafest performance! Our talented choreographers have been preparing some great dances so this is definitely an event you don't want to miss! There is something for everyone. If dancing isn't your thing, there are a variety of different events, such as yo-yo, video skit, or singing act! Sign up!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/dds.jpg"
            header="Dollar Dim Sum"
            subheading="Dec 6, 2019 | Shea House"
            text={`Tired of eating dining hall food? Homesick for some of your favorite Chinese dishes? Happy that it's the last day of class? Look no further! Come on out to CSA's annual Dollar Dim Sum to eat homemade Chinese dishes for just $1 each! Try out a variety of different kinds of foods from Char Siu Pork to Egg Tart! You won't want to miss out on this deliciousness! Treat yourself to some good food on the last day of class before finals start 🙂`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/december_gbm.png"
            header="December GBM"
            subheading="Dec 4, 2019 | Clark 108"
            text={`Happy Holidays, CSA! Come on out to our December General Body Meeting for some *festive* activities. Don't forget to pick up your Santagrams and participate in Secret Santa if you signed up! Let's end 2019 with a bang and spread some good holiday cheer right before finals szn 🙂`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/chinaball.jpg"
            header="Chinaball"
            subheading="Nov 24, 2019 | SRC"
            text={`CHINABALL is being revived after 4 years! This is a 3 v 3 basketball charity tournament held on Sunday, 11/24 from 2-5 pm at Slaughter Gym. Entry fee is $25 per team. Winners will receive a basketball signed by the UVA men's basketball team! All proceeds go to Free the Children!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/november_gbm.jpg"
            header="November GBM"
            subheading="Nov 6, 2019 | Clark 108"
            text={`Another day, another dollar! Come on out to November GBM to find out about this month's events! Things have cooled down thus far (like the weather), but you know we still got some hot stuff for you all 😉 From Boys & Girls Night to Homecoming Tailgate to Thanksgiving Potluck, come on out to learn all about it! Hope to see everyone there~`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/october_gbm.jpg"
            header="October GBM"
            subheading="Oct 9, 2019 | Clark 107"
            text={`Which is spoopier? Exams or Halloween? 😉 Come through to CSA's October GBM to find out what our officer board has in store for you this month! Prepare yourselves for a wide variety of events, from FullMoonFest to even Trick-or-Treat'ing your friends 🙂 Make sure to come out and learn about how you can participate in our annual game Humans v. Zombies too!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/paint_wars.jpg"
            header="Paint Wars"
            subheading="Sep 15, 2019 | Dell Field"
            text={`CSA is bringing back one of our annual games, Paint Wars 2019! Prepare yourself for a colorful and messy game of Capture the Flag and Dodgeball! This year, CSA is co-sponsoring with Asian Student Union at UVA, UVA aKDPhi, and Relay For Life at UVA Sign-up to take part in a colorful activity for charity. This year’s proceeds will be benefiting Relay for Life for American Cancer Society, Sexual Assault Resource Agency, and Breast Cancer Awareness.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/smores.jpg"
            header="S'mores Night"
            subheading="Sep 4, 2019 | Jefferson Commons"
            text={`Come hang out with us after CSA at UVA Presents: First General Meeting! to enjoy some yummy s'mores and get to know other members of CSA. We'll be walking together as a group from Physics 204 after the meeting. Hope to see you there!`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/first_gbm.jpg"
            header="First GBM"
            subheading="Sep 4, 2019 | Physics 204"
            text={`From 6:30 PM until the start of the meeting, find us in front of the Physics Building for FREE PIZZA and if you're one of the first 50 people to arrive at the meeting then you will get a FREE STICKER!!
            Come meet our officers, sign up to join a family, and get to know everyone before kicking off another amazing year with CSA at UVA Presents: S'mores Night! right after the meeting!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/fall_symposium.jpg"
            header="Fall Symposium"
            subheading="Aug 31, 2019 | Ern Commons"
            text={`Symposium is a new event this year, created to facilitate even more personal relationships between Family Heads and their respective Aunts and Uncles, as well as to have an open-forum discussion about organization health in order to build a strong communication pipeline all throughout the org.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/car_wash.jpg"
            header="Car Wash Fundraiser"
            subheading="Jul 27, 2019 | Exxon Springfield"
            text={`Looking to get your car squeaky clean? Missing or haven't seen your CSA pals all Summer?
            Then drive on by and invite your friends to CSA'S ANNUAL FREE CAR WASH!!!
            Donations are accepted throughout the event and all proceeds go towards the Chinese Student Association at UVA!`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2019-2020/events/kft_fundraiser.jpg"
            header="Kung Fu Tea Fundraiser"
            subheading="Jun 29, 2019 | Kung Fu Tea Annandale"
            text={`Come out and quench your summer thirst with some bubble tea on Saturday, June 29th from 3:00 to 9:00 PM!! All proceeds will benefit the Chinese Student Association at the University of Virginia!!!
            Make sure to ***put yo receipt in the basket that says csa!!!!!*** `}
            style={cardStyle}
          />
        </Grid>
      </Grid>
      <ScrollUpButton />
    </div>
  )
}

export default Past2019_2020
