"use client"
import "app/globals.css"
import { Grid, Box } from "@mui/material"
import "@fontsource/raleway"

const About = () => {
  return (
    <div className="content">
      <Box
        component="img"
        sx={{
          maxHeight: "33%",
          objectFit: "cover",
          margin: "0 auto",
        }}
        src="/images/about_cover.jpg"
      />
      <div className="header">
        <h1>About</h1>
      </div>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            margin: "auto",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "2%",
            fontSize: "1.5em",
            fontWeight: "bold",
          }}
        >
          <div className="header">
            <p>
              The Chinese Student Association at the University of Virginia (CSA@UVA) seeks to promote Chinese culture
              within the University and greater Charlottesville community.
            </p>
            <br />
            <p>CSA welcomes and encourages people of all ages, races, and backgrounds!</p>
          </div>
        </Grid>
        <Grid item xs={7} sx={{ margin: "auto", paddingLeft: "10%", paddingRight: "10%" }}>
          <div className="header">
            <h2 style={{ marginBottom: "2%" }}>Culture</h2>
            <p>
              Our primary goal is to nurture and celebrate Chinese culture and heritage. We hold two large cultural
              showcases annually: FullMoonFest for Mid-Autumn Festival, and Chinafest for Lunar New Year. Both include
              dances, skits, and other entertainment, exhibiting facets of both traditional and modern Chinese culture.
              We also have other cultural events like Dollar Dim Sum, where we sell Chinese food for $1 a portion.
            </p>
            <br />
            <p>
              Even though our primary goal is to celebrate Chinese culture, we invite people from all cultures and
              backgrounds to join CSA.
            </p>
          </div>
        </Grid>
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              objectFit: "cover",
              padding: "5%",
            }}
            src="/images/gallery/chinafest_dragon_justin_2023.JPG"
          />
        </Grid>
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              objectFit: "cover",
              padding: "5%",
            }}
            src="/images/gallery/asu_exec_2023.jpg"
          />
        </Grid>
        <Grid item xs={7} sx={{ margin: "auto", paddingLeft: "10%", paddingRight: "10%" }}>
          <div className="header">
            <h2 style={{ marginBottom: "2%" }}>Community</h2>
            <p>
              Beyond cultural celebrations, CSA prides itself on our community and unity. Our family system forges
              lifelong connections, where individuals find support, mentorship, and a sense of belonging. We spend time
              and connect with friends old and new, whether through sports, parties, or other social events. We create
              bonds beyond just cultural affiliations.
            </p>
          </div>
        </Grid>
        <Grid item xs={7} sx={{ margin: "auto", paddingLeft: "10%", paddingRight: "10%" }}>
          <div className="header">
            <h2 style={{ marginBottom: "2%" }}>Outreach</h2>
            <p>
              Finally, CSA spreads our goals throughout the whole surrounding community. We participate in Culturefest,
              UVA’s annual multicultural showcase; interact and co-host events with other CIOs on-grounds such as UPC
              and other multicultural organizations; and invite the whole UVA and Charlottesville community to come to
              our events, especially for our large culture shows like FullMoonFest and Chinafest. We celebrate Chinese
              culture with anyone and everyone.
            </p>
          </div>
        </Grid>
        <Grid item xs={5}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              objectFit: "cover",
              padding: "5%",
            }}
            src="/images/gallery/yar_2023.jpg"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default About
