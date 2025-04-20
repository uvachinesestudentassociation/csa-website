"use client"
import "app/globals.css"
import "@fontsource/raleway"

import type React from "react"
import { Grid, Button } from "@mui/material"
import { FaArrowLeftLong } from "react-icons/fa6"
import EventCard from "@components/EventCard"
import ScrollUpButton from "@components/ScrollUpButton"
import Link from "next/link"

const Past2021_2022 = () => {
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
          <h1>2021-2022 Events</h1>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/fourth_year_reception.jpg"
            header="Fourth Year Reception"
            subheading="May 1, 2022 | Rotunda MPR"
            text={`Come bid farewell to our graduating CSA members! Reflect on their journey here and celebrate their bright futures to come!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/april_gbm.jpg"
            header="April GBM"
            subheading="Apr 20, 2022 | Clark 108"
            text={`🐉 Come to our FIRST GBM🥇 with our NEW OBOARD AND EXEC! 💁‍♀️💁‍♂️ Meet the future of CSA 🔮, and see what exciting things we have in store to end off the year! 🎆`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/chinafest.png"
            header="Chinafest"
            subheading="Mar 26, 2022 | Buford Middle School"
            text={`Chinafest is CSA's largest annual performance, and brings together the members our organization, to celebrate the Lunar New Year. Indulge in Chinese culture like you've never before. Our members have been working hard for the past few weeks to prepare this performance, with both traditional and modern acts!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/kft_danbap_fundraiser.jpg"
            header="Kung Fu Tea x Danbap Fundraiser"
            subheading="Mar 23, 2022 | Kung Fu Tea Charlottesville"
            text={`Come out and support CSA by getting some delicious boba tea and Korean food bowls!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/exec_elections.jpg"
            header="Executive Board Elections"
            subheading="Mar 18, 2022 | Maury 209"
            text={`Come out to CSA's Executive Board Elections for 2022-2023!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/spring_family_month.jpg"
            header="Spring Family Month"
            subheading="Mar 14 - Apr 15, 2022 | Charlottesville, VA"
            text={`Hi! Hi! Hi! We hope you all had a relaxing and rejuvenating spring break! We can’t wait to see you all again during Spring Family Month <33.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/march_gbm.jpg"
            header="March GBM"
            subheading="Mar 2, 2022 | Wilson 402"
            text={`Join us for March GBM, the last GBM held by the current exec and officer board! Help us end our our term with a bang while learning about all the exciting stuff coming up this month including Chinafest and Spring Family Month!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/coffeehouse.jpg"
            header="Coffeehouse Fundraiser"
            subheading="Feb 26, 2022 | Runk Green Room"
            text={
              "Join CSA, VSA, and OYFA for a relaxing musical charity event to benefit National Alliance on Mental Illness, Asian Prisoner Support Committee, and Philippines Relief Fund. We will be presenting mainly musical performances from members of these organizations. Coffee will be provided."
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/mytie.jpg"
            header="MyTie"
            subheading="Feb 12, 2022 | Runk Green Room"
            text={
              "Valentine’s day is coming up! you got a date yet? 😵‍💫🗿 If not, come out to CSAxKSA’s MyTie event to find a special someone! 💃🕺You’ll get randomly paired with someone of the opposite gender and go through multiple rounds of mini games to find the ultimate couple. 👑If you and your partner win, you could get a free dinner at a Cville restaurant as the prize!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/chinavasian.jpg"
            header="ChinaVAsian"
            subheading="Feb 5, 2022 | Charlottesville, VA"
            text={
              "UVA is proud to host W&M, VT, and VCU for ChinaVAsian 2022, an annual event that brings together the Chinese Student Organizations from colleges across Virginia. There will be performances, sports, and activities for the members of each school to interact and get to know each other!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/february_gbm.jpg"
            header="February GBM"
            subheading="Feb 2, 2022 | Ern Commons"
            text={
              "We're back again, so get ready for a Valentine themed ice breaker! Bring your friends and/or significant other to have some fun and learn about upcoming events!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/chinafest_showcase.jpg"
            header="Chinafest Showcase"
            subheading="Jan 21, 2022 | AFC"
            text={
              "Come to Chinafest Showcase to preview some of the dances you can participate in for our annual Chinafest performance! Our talented choreographers have been preparing some awesome dances, so this is definitely an event you don't want to miss!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/january_gbm.jpg"
            header="January GBM"
            subheading="Jan 19, 2022 | Ern Commons"
            text={`Hope everyone had a restful break! Bet you missed CSA a bit so come out to CSA's first general body meeting of the semester! We have a fun icebreaker prepared and you get to learn more about our upcoming events!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/dds.jpg"
            header="Dollar Dim Sum"
            subheading="Dec 3, 2021 | Shea House"
            text={`Come out and bring your friends for some delicious traditional Chinese food! Dim Sum (点心) is a style of Chinese cuisine where food is usually served in small bite-sized portions and is paired with tea to form a full tea brunch (Yum Cha or 饮茶).
            For $1 per dish, you can indulge in a variety of foods, ranging from egg tarts to scallion pancakes to even char siu pork and more! `}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/december_gbm.jpg"
            header="December GBM"
            subheading="Dec 1, 2021 | Wilson 301"
            text={`It's finally December! Start off the holiday season right by attending GBM! We have so much planned for this gbm such as a fun and delicious ice breaker, Secret Santa, and of course Santagrams for a sweet treat :)) Come have fun with us before the semester ends!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/chinaball.jpg"
            header="Chinaball"
            subheading="Nov 21, 2021 | SRC"
            text={`This is a 3 v 3 basketball charity tournament held on Sunday, 11/21 from 2-5 pm at Slaughter Recreation Center. Entry fee is $15 per team.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/thanksgiving_potluck.jpg"
            header="Thanksgiving Potluck"
            subheading="Nov 19, 2021 | Newcomb South Meeting Room"
            text={`Come join us at our next potluck as we eat Thanksgiving food together! Each family will be cooking their own dishes to bring so keep an eye out for an announcement from your family heads!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/santagrams.jpg"
            header="Santagrams Fundraiser"
            subheading="Nov 8-22, 2021 | Charlottesville, VA"
            text={`The holiday season ❄ is FINALLY upon us and that means the season of giving has arrived🎄! Make your loved ones feel special by gifting them a 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝘇𝗲𝗱 𝗴𝗼𝗼𝗱𝗶𝗲 𝗯𝗮𝗴 with a message and homemade baked treats :))) ☃`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/fmf.jpg"
            header="FullMoonFest"
            subheading="Nov 6, 2021 | Ern Commons"
            text={`Welcome to FullMoonFest, our annual celebration of the Mid-Autumn Festival! This is a fun opportunity to explore many of the other cultural organizations here at UVA, meet new friends, and catch up with old ones. It will be a fun afternoon with modern and traditional Chinese dances, a skit, raffles, and FREE Chinese food catered from Peter Chang!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/november_gbm.jpg"
            header="November GBM"
            subheading="Nov 3, 2021 | Wilson 301"
            text={`Come out to the November GBM to reminisce about spooky season and hear about upcoming events this month! We hope to see you all there!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/krispy_kreme_fundraiser.jpg"
            header="Krispy Kreme Fundraiser"
            subheading="Oct 16-23, 2021 | Charlottesville, VA"
            text={`Buy a voucher ticket for a dozen Krispy Kreme donuts for you, your friends, your class, or your project group! Each box will be $11 and vouchers can be used at any Krispy Kreme location and will be distributed via email at the end of the fundraising period!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/homecoming_tailgate.jpg"
            header="Homecoming Tailgate"
            subheading="Oct 16, 2021 | Grills @ 1815 JPA"
            text={`Come to 1815 grills for food and fun! There will be CSA alumni that can't wait to see you! There will also be plenty of food for all! See you all there!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/october_gbm.jpg"
            header="October GBM"
            subheading="Oct 6, 2021 | Ern Commons"
            text={`Come out to our October GBM to have a spooky time and hear about exciting events coming up this month! We hope to see you there!`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/paint_wars.jpg"
            header="Paint Wars"
            subheading="Sep 19, 2021 | Nameless Field"
            text={`CSA is bringing back one of our annual games, Paint Wars 2021! Prepare yourself for a colorful and messy game of Capture the Flag and Dodgeball! This year, CSA is co-sponsoring with Asian Student Union at UVA and UVA aKDPhi. Sign-up to take part in a colorful activity for charity!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/fall_family_week.jpg"
            header="Fall Family Week"
            subheading="Sep 3-17, 2021 | Charlottesville, VA"
            text={`Welcome back to Grounds everyone! We can't wait for you guys to get to know your family and finally be able to hang out in person again.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/meet_the_parents.jpg"
            header="Meet the Parents"
            subheading="Sep 3, 2021 | Newcomb Ballroom"
            text={`Come meet your family and meet new friends at Meet the Parents on Friday, 9/3, at 7 PM at NEWCOMB BALLROOM! Your family heads are excited to meet all of you! Come prepared to play some icebreakers and have fun competition!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/smores.jpg"
            header="S'mores Night"
            subheading="Sep 1, 2021 | Jefferson Commons"
            text={`Come hang out with us after CSA at UVA Presents: First General Meeting to enjoy some yummy s'mores and get to know other members of CSA. We'll be walking together as a group from Ern Commons after the meeting. Hope to see you there!`}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2021-2022/events/first_gbm.jpg"
            header="First GBM"
            subheading="Sep 1, 2021 | Ern Commons"
            text={`Welcome first years and welcome back returning members! Come meet our officers, sign up to join a family, and get to know everyone before kicking off another amazing year with CSA at UVA Presents: S'mores Night right after the meeting!`}
            style={cardStyle}
          />
        </Grid>
      </Grid>
      <ScrollUpButton />
    </div>
  )
}

export default Past2021_2022
