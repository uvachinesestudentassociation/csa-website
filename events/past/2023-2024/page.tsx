"use client"
import "app/globals.css"
import "@fontsource/raleway"

import type React from "react"
import { Grid, Button } from "@mui/material"
import { FaArrowLeftLong } from "react-icons/fa6"
import EventCard from "@components/EventCard"
import ScrollUpButton from "@components/ScrollUpButton"
import Link from "next/link"

const Past2023_2024 = () => {
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
          <h1>2023-2024 Events</h1>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/january_gbm.jpg"
            header="January GBM"
            subheading="Jan 24, 2024 | Ern Commons"
            text={`Join us as we recap winter break and tease some exciting upcoming events that this semester has to offer!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/december_gbm.jpg"
            header="December GBM"
            subheading="Dec 6, 2024 | Ern Commons"
            text={`Join us in closing off the semester with our December GBM on December 6th! ❄️☃️This will be one you won’t want to miss. We will be handing out Santagrams 🍪 (and selling extras for those who missed their chance to buy one) to spread the holiday cheer! ✨🎄There will also be a Secret Santa gift exchange 🎁 after for those who signed up.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/dds.jpg"
            header="Dollar Dim Sum"
            subheading="Dec 2, 2023 | Shea House"
            text={`Take a break from dining hall food 🤮 and enjoy HOMEMADE DIM SUM! 😋 Get your sweet 🍬 and savory urges satisfied 🥡 with us at Shea House this weekend! 📅
            Dishes are only $1 each! We accept both Venmo and cash.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/triple_threat.jpg"
            header="Triple Threat"
            subheading="Nov 4, 2023 | DU @ 171 Madison Lane"
            text={`socials from csa x oyfa x vsa presents TRIPLE THREAT ⚠️⚠️3️⃣⚠️⚠️\n
            Dress Code: Dress as your favorite iconic trio!\n
            Door fee: FREE for performers in csa / vsa / oyfa (make sure to grab your wristbands at culturefest!), $5 for due paying members, $8 for non due paying members\n
            come stop by and celebrate after CULTUREFEST 🕺👯‍♀️💃`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/november_gbm.jpg"
            header="November GBM"
            subheading="Nov 1, 2023 | Ern Commons"
            text={`Come kick off the start of the holiday season with us as we recap the past month and introduce some of the exciting upcoming events we have planned for everyone! 🍁🦃`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/doma_fundraiser.jpg"
            header="Doma Fundraiser"
            subheading="Nov 1, 2023 | DOMA Korean Kitchen"
            text={`Come grab some yummy food before our upcoming GBM ❤\n
              The fundraiser will run ALL DAY (DOMA IS CLOSED BETWEEN 3-5PM) for both dine-in and takeout, so please write CSA on your receipt when paying!\n
              Families will send out information soon about a takeout order sheet (if you want food delivered to you at GBM 😃)`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/fmf_afterparty.jpg"
            header="FullMoonFest Afterparty"
            subheading="Oct 28, 2023 | Phi Sig @ 1702 Gordon Ave"
            text={`CSA x TSA Afterparty for CSA’s FullMoonFest: Rhyme Without Reason 🎭🤔\n
              🌧️🧠Dress Code: Make sure to come dressed with some friends as a rhyme that doesn’t make any sense!!\n
              🐭🏡FREE for CSA’s FMF performers, $3 for CSA & TSA due-paying members, and $5 for nonmembers\n
              (18+ to chill 21+ to spill)`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/fmf.jpg"
            header="FullMoonFest"
            subheading="Oct 28, 2023 | Newcomb Ballroom"
            text={
              "FullMoonFest is our annual cultural celebration of the Mid-Autumn Festival. The Mid-Autumn Festival, also known as the Moon Festival, is a traditional holiday celebrated in Chinese culture where family and friends reunite over dinner and celebrate the moon by eating mooncakes. This is an excellent opportunity to meet new friends, reunite with old ones, and celebrate one of the biggest Chinese holidays!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/pumpkin_painting.jpg"
            header="Pumpkin Painting"
            subheading="Oct 14, 2023 | Ern Commons"
            text={
              "Get into the Halloween spirit or just snazz and jazz your home up with a little handmade fall decor!! 👻 Make sure to sign up to ensure you get a pumpkin! 🎃😎"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/yar_tailgate.jpg"
            header="YAR Tailgate"
            subheading="Oct 7, 2023 | Grills @ 1815 Jefferson Park Ave"
            text={
              "Meet old and new friends alike as we welcome back our alumni at our YAR Tailgate! Enjoy some free hot dogs and burgers before the big game!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/moge_tee_fundraiser.jpg"
            header="Moge Tee Fundraiser"
            subheading="Oct 6, 2023 | Moge Tee"
            text={
              "Join us at Moge Tee on the Corner to support CSA and cool off with a refreshing drink! Be sure to mention CSA at the register!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/october_gbm.jpg"
            header="October GBM"
            subheading="Oct 4, 2023 | Ern Commons"
            text={
              "Come get your spooky on at CSA’s October GBM where we will be recapping the month and learning about all the exciting events to come! 🎃🎃🎃 (There will be a VERY SEPCIAL teaser dropping as well for one of our biggest events of the year)!!👻👻"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/fpoty.jpg"
            header="FPOTY"
            subheading="Sep 15, 2023 | Lambdas @ 118 Maywood Ln"
            text={`COME OUT TO CSA FPOTY‼️ where you can be bad like the barbie, a doll, and still go party 🕺\n
            DRESS CODE 👙🩳: show up in your best barbie or beach themed fit! Brownie points if you do both!\n
            $5 for one time entry, $10 for membership dues\n
            (18+ to chill, 21+ to spill)`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/fall_family_week.jpg"
            header="Fall Family Week"
            subheading="Sep 2-16, 2023 | Charlottesville, VA"
            text={`Get ready for a year of new friends, bonds, and experiences :DDD we’ll be kicking it off with Fall Family Week 2023!!!! Info, links, and sign ups will be posted in your family groups.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/mtp.jpg"
            header="Meet the Parents"
            subheading="Sep 2, 2023 | Newcomb Ballroom"
            text={`Come start off Fall Family Week with Meet the Parents on Saturday, September 2nd, 7pm at Newcomb Ballroom. You’ll get the chance to meet your fam heads, aunts, and uncles, all of whom are excited to meet you!!! Be ready for some ice breakers as well and make sure you bring your competitive spirit, you’re gonna need it 😃`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/smores.jpg"
            header="S'mores Night"
            subheading="Aug 30, 2023 | New Dorms Grill"
            text={`Head over to the new doms grill to indulge in some s'mores as you mingle! We will be walking everybody directly from First GBM to there so make sure you come to that as well!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/first_gbm.jpg"
            header="First GBM"
            subheading="Aug 30, 2023 | Ern Commons"
            text={`Come learn more about CSA, make new friends, and reconnect with old ones! Come 10 minutes early for some free pizza
            🍕🍕 (only available for the first 100 people). Then head over with us to the new dorms grill for S'mores Night at 9PM!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/car_wash.jpg"
            header="Car Wash Fundraiser"
            subheading="Aug 5, 2023 | Exxon Chantilly"
            text={`Come down to Chantilly’s Exxon to get your car washed at this donation based fundraiser! Invite family and friends!🚗🫧🫧`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2023-2024/events/teado.jpg"
            header="Tea Do Fundraiser"
            subheading="Jul 29, 2023 | Tea Do Fairfax"
            text={`🧋🧋Looking for your next boba fix? 🧋🧋
            Well, look no further! In collaboration with CSO @ William&Mary, we present to you our Tea Do fundraiser! Swing by to catch up with friends and enjoy a refreshing drink! Don’t forget to mention the fundraiser at the counter! 😁`}
            style={cardStyle}
          />
        </Grid>
      </Grid>
      <ScrollUpButton />
    </div>
  )
}

export default Past2023_2024
