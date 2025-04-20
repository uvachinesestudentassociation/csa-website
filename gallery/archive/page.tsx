"use client"
import "app/globals.css"
import "@fontsource/raleway"
import { Button } from "@mui/material"
import Link from "next/link"

import Archive2022 from "@components/Archive2022"
import Archive2023 from "@components/Archive2023"
import Archive2024 from "@components/Archive2024"

import background from "/public/images/mountains.png"

function Archive() {
  const buttonStyles = {
    padding: "20px 30px",
    width: "100%",
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div className="background" style={backgroundImageStyle}>
      <h1>Archive</h1>
      <div style={{ marginTop: "20px" }}>
        <Archive2024 />
        <Archive2023 />
        <Archive2022 />
      </div>

      <div className="buttons">
        <Link href="https://www.facebook.com/csa.uva/photos_albums">
          <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
            Facebook Group Photo Albums (2013-2022)
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Archive
