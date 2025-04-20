"use client"
import "app/globals.css"
import "@fontsource/raleway"

import type React from "react"
import { Grid, Button } from "@mui/material"
import { FaArrowLeftLong } from "react-icons/fa6"
import EventCard from "@components/EventCard"
import ScrollUpButton from "@components/ScrollUpButton"
import Link from "next/link"

const Past2022_2023 = () => {
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
          <h1>2022-2023 Events</h1>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/fourth_year_reception.jpg"
            header="Fourth Year Reception"
            subheading="Apr 30, 2023 | Rotunda MPR"
            text={`Join us in celebrating the accomplishments of our graduating CSA members! Bid them farewell and offer your congratulations as they embark on the next exciting chapter of their lives.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/exec_elections.jpg"
            header="Executive Board Elections"
            subheading="Mar 17, 2023 | Minor 125"
            text={`Come decide the future of CSA! Listen to what people running have to say about their positions and make your voice heard!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/spring_family_month.jpg"
            header="Spring Family Month"
            subheading="Mar 15 - Apr 14, 2023 | Charlottesville, VA"
            text={`we hope you had a restful spring break!! now get ready for spring family month >:))) we have a bunch of stuff planned for you guys, so keep an eye out for info in your fam chats. `}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/march_gbm.jpg"
            header="March GBM"
            subheading="Mar 1, 2023 | Ern Commons"
            text={`Learn about upcoming elections, sports, and more at GBM this March!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/chinafest.jpg"
            header="Chinafest"
            subheading="Feb 25, 2023 | Burley Middle School"
            text={`Come out to our largest event of the year, Chinafest! To celebrate 🌏 Chinese culture 🌏 and 🐇 Lunar New Year 🐇, we will be performing a variety of acts!
            Let's see how loud y'all can cheer 🗣️ for your friends and family! They have all worked really hard to help bring our vision to life, and we can't wait to share the good vibes and good times with you.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/february_gbm.jpg"
            header="February GBM"
            subheading="Feb 1, 2023 | Wilson 301"
            text={`Come to our next GBM to find out more about what's coming up this semester!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/chinafest_showcase.jpg"
            header="Chinafest Showcase"
            subheading="Jan 21, 2023 | O'Hill Forum"
            text={`Are you excited for CHINAFEST? Want to get a sneak peek at what we're going to perform? Even better, want to BE IN THOSE PERFORMANCES???
            Come to Chinafest Showcase and see what our wonderful choreographers have been working on over break! People that come also get first priority to pick which dances they want to participate in!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/lunar_new_year.jpg"
            header="Lunar New Year Celebration"
            subheading="Jan 21, 2023 | O'Hill Forum"
            text={
              "Come celebrate Lunar New Year with us! Learn about the significance of Lunar New Year while having doing some fun activities and maybe even free munchies!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/january_gbm.jpg"
            header="January GBM"
            subheading="Jan 18, 2023 | Ern Commons"
            text={
              "HELLO HELLO HELLO! Hope y'all had a good break! To kick off the school year, come out to our FIRST GBM of the semester and find out what exciting things we have planned! There's so much to do (cough cough CHINAFEST), so be sure to not miss it! "
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/december_gbm.jpg"
            header="December GBM"
            subheading="Dec 7, 2022 | Wilson 301"
            text={
              "Come to our LAST GBM of the semester! Get ready for the holidays with us and get a sneak peek into what's happening next semester! ALSO come pick up your Santagrams and exchange Secret Santa gifts!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/dds.jpg"
            header="Dollar Dim Sum"
            subheading="Dec 3, 2022 | Shea House"
            text={
              "Take a break from dining hall food 🤮 and enjoy HOMEMADE DIM SUM! 😋 Get your sweet 🍬 and savory urges satisfied 🥡 with us at Shea House this weekend! 📅"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/chinaball.jpg"
            header="Chinaball"
            subheading="Nov 13, 2022 | Memorial Gym"
            text={
              "Chinaball is CSA's annual 3v3 basketball tournament for charity, and this year, it will be held November 13th at Memorial Gym courts 1 & 2 from 3-6:30PM."
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/november_gbm.jpg"
            header="November GBM"
            subheading="Nov 2, 2022 | Wilson 301"
            text={`Come out and find out what we have for the next month! Learn about Chinaball, Thanksgiving potluck, and more!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/fmf.jpg"
            header="FullMoonFest"
            subheading="Oct 22, 2022 | Newcomb Ballroom"
            text={`FullMoonFest is our annual cultural celebration of the Mid-Autumn Festival. The Mid-Autumn Festival, also known as the Moon Festival, is a traditional holiday celebrated in Chinese culture where family and friends reunite over dinner and appreciate the moon by eating mooncakes. This is an excellent opportunity to meet new friends, reunite with old ones, and celebrate one of the biggest Chinese holidays!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/homecoming_tailgate.jpg"
            header="Homecoming Tailgate"
            subheading="Oct 8, 2022 | Grills @ 1815 JPA"
            text={`Come and meet recent CSA alumni while enjoying some burgers and hot dogs!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/october_gbm.jpg"
            header="October GBM"
            subheading="Oct 5, 2022 | Student Health Multipurpose Room"
            text={`Come and see what CSA has in store for the next month! We have FullMoonFest, Humans vs. Zombies, and more!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/paint_wars.jpg"
            header="Paint Wars"
            subheading="Sep 18, 2022 | Dell Field"
            text={`CSA is bringing back one of our annual games, Paint Wars 2022! Prepare yourself for a colorful and messy game of Capture the Flag and Dodgeball! This year, CSA is co-sponsoring with Asian Student Union at UVA, UVA alpha Kappa Delta Phi, and UVA Lambda Phi Epsilon! Sign-up to take part in a colorful activity for charity.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/smores.jpg"
            header="S'mores Night"
            subheading="Aug 31, 2022 | New Dorms Fire Pit"
            text={`Cook some s'mores with us and meet other people in CSA! We'll head over right after our GBM.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/first_gbm.jpg"
            header="First GBM"
            subheading="Aug 31, 2022 | Ern Commons"
            text={`Come to our first meeting of the year to learn about who we are and the awesome things we do! Be a little early for some free pizza before 😃`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/car_wash.jpg"
            header="Car Wash Fundraiser"
            subheading="Jul 23, 2022 | Exxon Springfield"
            text={`Come support 🐉 CSA@UVA 🐉 at a DONATION BASED car wash in NOVA! 🪣 We wash your car, you choose the price. 🧼 Bring your dirty (or not so dirty) car and see some familiar faces! 🚗`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2022-2023/events/teadm.jpg"
            header="TeaDM Fundraiser"
            subheading="Jun 25, 2022 | TeaDM Fairfax"
            text={`Enjoy some boba in NOVA and support your favorite Asian orgs at both VT and UVA! Make sure mention CSA or VSA at the register 😃`}
            style={cardStyle}
          />
        </Grid>
      </Grid>
      <ScrollUpButton />
    </div>
  )
}

export default Past2022_2023
