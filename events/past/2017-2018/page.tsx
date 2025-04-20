"use client"
import "app/globals.css"
import "@fontsource/raleway"

import type React from "react"
import { Grid, Button } from "@mui/material"
import { FaArrowLeftLong } from "react-icons/fa6"
import EventCard from "@components/EventCard"
import ScrollUpButton from "@components/ScrollUpButton"
import Link from "next/link"

const Past2017_2018 = () => {
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
          <h1>2017-2018 Events</h1>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/china_get_fit.jpg"
            header="China Get Fit"
            subheading="May 1, 2018 | AFC MP3"
            text={`Stressed about finals? Got a paper to write? Worried about how you'll look for beach week? Well don't worry... come destress and get fit with the first ever, CSA Fitness event! which will include ab workouts, zumba, and high intesity interval training (HIIT) workout!! ~No experience necessary~ We will be going to the hot tub to relax and the sauna after to cleanse your pores!! GET HYPE!! and Lets get ~FIT~
            C S A on 3... 1... 2... 3... CSA!!!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/fourth_year_reception.jpg"
            header="Fourth Year Reception"
            subheading="Apr 22, 2018 | Darden Dining Room"
            text={`It's that time of the year again! Come to Darden Dining Room this Sunday, April 22nd from 6-9PM to say farewell to all the fourth years that are graduating this year 🙁`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/mytie.jpg"
            header="MyTie"
            subheading="Mar 30, 2018 | Clark 107"
            text={`Spring into the new season and get to know someone new! Get paired with a person of the opposite gender in an Easter Egg Roulette: Each guy will put his name in an unmarked Easter egg, and each girl will pick one at random. Then, play some partner games for a chance to win a free dinner! Afterwards, head out to dinner on the Corner with your partner and get some delicious noms!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/exec_elections.jpg"
            header="Executive Board Elections"
            subheading="Mar 23, 2018 | Wilson 301"
            text={`Come out to CSA's Executive Board Elections for 2018-2019!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/march_gbm.jpg"
            header="March GBM"
            subheading="Feb 28, 2018 | Maury 209"
            text={
              "Wow time really flies! Come to the last general body meeting with the current (2017-2018) officer board. We will also go over some of the events going on in March including Spring Family Month so you don't want to miss out!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/chinafest.jpg"
            header="Chinafest"
            subheading="Feb 17, 2018 | Burley MS"
            text={`This years theme, fate or 命运, refers to a persons future that is or at least seems to be set in stone and predicted to happen before it does. Fate is not something everyone believes in but is instead something that can just happen. It may be that fate cannot be changed and is controlled by a supernatural force but either way, you must be fated to come to Chinafest!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/february_gbm.jpg"
            header="February GBM"
            subheading="Jan 24, 2018 | Physics 204"
            text={
              "While not technically in February, come join us anyways for the first CSA General Body Meeting of 2018! We will go over some of the major events coming up this semester so come out if you can! If you are going to ChinaVAsian, make sure you come and stick around to go over necessary details for the event. Hope to see you there!"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/if_you_are_the_one.jpg"
            header="If You Are the One"
            subheading="Jan 19, 2018 | Charlottesville, VA"
            text={
              "Inspired by the Chinese TV show “If You Are the One”, MSN will present this annual dating event with KSA, CSA and OYFA in January 19th, 2018. Click HERE to watch our promotion video for If You Are the One: https://m.youtube.com/watch?v=9mF8gFfarRo"
            }
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/dds.jpg"
            header="Dollar Dim Sum"
            subheading="Dec 1, 2017 | Shea House"
            text={`Take a break from dining hall food and come to Dollar Dim Sum to eat different Chinese food for just $1 each!.Try out different kinds of food from char siu pork to red bean buns!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/december_gbm.jpg"
            header="December GBM"
            subheading="Nov 29, 2017 | Minor 125"
            text={`Come join us for our last General Body Meeting in 2017! There will be a few festive activities in anticipation of the upcoming holidays!
            If you are participating in our Secret Santa, make sure you bring your present so that you can receive a gift from your Secret Santa! Also, Santagrams will be handed out during the meeting so if you received one, don't forget to stop by and pick yours up! Alternatively, if you can't pick them up at the meeting, we will be handing them out that Thursday in Clark!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/thanksgiving_potluck.jpg"
            header="Thanksgiving Potluck"
            subheading="Nov 18, 2017 | Newcomb Kaliedoscope Room"
            text={`Come to our annual Thanksgiving potluck and enjoy a delicious meal with CSA! Families will be helping to prep the food, so keep an eye out for more details!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/santagrams.jpg"
            header="Santagrams Fundraiser"
            subheading="Nov 13-22, 2017 | Charlottesville, VA"
            text={`Want to show your friend your appreciation for them? Want to confess your love to someone? Want to buy yourself some sweets because it's almost finals? Well, HERE'S YOUR CHANCE! Treats will be handed out at our Dec GBM on Nov 29th!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/november_gbm.jpg"
            header="November GBM"
            subheading="Nov 1, 2017 | Maury 209"
            text={`Fall season is in full swing so come out to find out about the fun fall festivities we have planned for the month!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/paint_wars.jpg"
            header="Paint Wars"
            subheading="Oct 28, 2017 | Dell Field"
            text={`Get ready to get messy for the most colorful dodgebull/capture the flag game at UVA! This year we are co-sponsoring with Third Year Council, Second Year Council, and UVA Lambdas to present Paint Wars 2017! Sign up by yourself or with a team to take part in a fun acitivty for charity. This year this event will be benefiting Relay for Life, a fundraiser for the American Cancer Society.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/fmf.jpg"
            header="FullMoonFest"
            subheading="Oct 14, 2017 | Newcomb Ballroom"
            text={`Come celebrate the Mid-Autumn Festival with CSA at Full Moon Fest! Explore some of the other cultural organizations here at UVA as well as meet new friends or catch up with old ones. Join us for a night of FREE Chinese food, raffles, and live performances featuring a skit as well as modern and traditional Chinese dances!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/october_gbm.jpg"
            header="October GBM"
            subheading="Oct 4, 2017 | Maury 209"
            text={`Come out to learn more about some of the upcoming events this month!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/fall_family_week.jpg"
            header="Fall Family Week"
            subheading="Sep 2-16, 2017 | Charlottesville, VA"
            text={`Ready to have the best two weeks of your life? ITS FALL FAMILY WEEK TIME!!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/mtp.jpg"
            header="Meet the Parents"
            subheading="Sep 1, 2017 | Newcomb Ballroom"
            text={`Find out what family you're in and meet your new friends in CSA! Your family heads have prepped hard to plan some fun events for you, and they're excited to meet all of you! Get ready to start off the new school year with some ice breakers and fun competitions! Also, COME EARLY at 6:30 to get some icecream and meet some new people!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/smores.jpg"
            header="S'mores Night"
            subheading="Aug 30, 2023 | 109 Observatory Ave"
            text={`After the CSA at UVA presents: First General Meeting! come hang out with us and enjoy some s'mores! We will be walking to 109 Observatory together after the general body meeting.`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/first_gbm.jpg"
            header="First GBM"
            subheading="Aug 30, 2017 | Maury 209"
            text={`Come to the first general meeting of the year in Monroe 124 to find out about all the events planned in the upcoming weeks! Find out more about what CSA does, mingle with others, and meet the current officer board!`}
            style={cardStyle}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <EventCard
            image="/images/2017-2018/events/car_wash.jpg"
            header="Car Wash Fundraiser"
            subheading="Jun 24, 2017 | Exxon Springfield"
            text={`Our most anticipated summer event has arrived! The Chinese Student Association at the University of Virginia presents our Summer Carwash! Bring your car over and we will wash it just for you! This is a donation based event where all donations help support and fund CSA@UVa! Come visit us if you can! `}
            style={cardStyle}
          />
        </Grid>
      </Grid>
      <ScrollUpButton />
    </div>
  )
}

export default Past2017_2018
