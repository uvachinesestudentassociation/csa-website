"use client"
import "app/page.css"
import "app/globals.css"
import "@fontsource/raleway"

import { useEffect, useState } from "react"
import { Card, CardContent, Typography, Grid, Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

import background from "/public/images/background.png"
import facebook from "/public/images/facebook.png"
import facebook_group from "/public/images/facebook_group.png"
import instagram from "/public/images/instagram.png"
import youtube from "/public/images/youtube.png"

function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const backgroundImageStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div className="home" style={backgroundImageStyle}>
      <div className="content">
        <div className="header">
          <h1>Welcome to CSA!</h1>
        </div>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            {isClient && (
              <Card className="introduction" variant="outlined">
                <CardContent style={{ padding: "15px" }}>
                  <Typography variant="body1">
                    The Chinese Student Association at the University of Virginia (CSA@UVA), as one of the largest
                    Asian-American cultural organizations on grounds, seeks to promote awareness and appreciation for
                    Chinese culture within the University and greater Charlottesville community.
                  </Typography>
                  <div className="socials" style={{ marginTop: "15px", textAlign: "center" }}>
                    <Link href="https://www.facebook.com/csa.uva">
                      <Image src={facebook} alt={"Facebook icon"} />
                    </Link>
                    <Link href="https://www.facebook.com/groups/csaatuva">
                      <Image src={facebook_group} alt={"Facebook group icon"} />
                    </Link>
                    <Link href="https://www.instagram.com/csaatuva/">
                      <Image src={instagram} alt={"Instagram icon"} />
                    </Link>
                    <Link href="https://www.youtube.com/@TheCSAatUVA">
                      <Image src={youtube} alt={"YouTube icon"} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
            <div className="buttons">
              {isClient && (
                <>
                  <Button
                    variant="contained"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/11_qaSL1IiBrtmic8Z_uvV28ASoNvcUp2JaCFi7mtRVk/viewform",
                      )
                    }
                  >
                    Returning Members Form
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/1IJpfdlxr7xssdubWsDVTqSrGaAiJyIdtcGHYZXeInhw/viewform",
                      )
                    }
                    style={{ marginLeft: "10px" }}
                  >
                    New Members Form
                  </Button>
                </>
              )}
            </div>
            <div className="buttons">
              {isClient && (
                <>
                  <Button
                    variant="contained"
                    onClick={() =>
                      window.open(
                        "https://facebook.us20.list-manage.com/subscribe?u=5df38cf096c70a0a7d9613210&id=a7ebb0ef17",
                      )
                    }
                    style={{ marginLeft: "10px" }}
                  >
                    Subscribe to Our Newsletter
                  </Button>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home
