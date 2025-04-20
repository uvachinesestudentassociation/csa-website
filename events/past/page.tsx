"use client"
import "app/globals.css"
import "@fontsource/raleway"
import { Grid, Button } from "@mui/material"
import Link from "next/link"

import background from "/public/images/mountains.png"

function Past() {
  const buttonStyles = {
    padding: "20px 30px",
    width: "100%",
  }

  const gridContainerStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div className="background" style={backgroundImageStyle}>
      <h1>Past Events</h1>
      <div className="buttons">
        <Grid container spacing={0} style={gridContainerStyles}>
          <Grid item xs={12} md={4}>
            <Link href="/events/past/2023-2024">
              <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                2023-2024
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="/events/past/2022-2023">
              <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                2022-2023
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="/events/past/2021-2022">
              <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                2021-2022
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="/events/past/2020-2021">
              <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                2020-2021
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="/events/past/2019-2020">
              <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                2019-2020
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="/events/past/2018-2019">
              <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                2018-2019
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Link href="/events/past/2017-2018">
              <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                2017-2018
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Past
