import "@fontsource/raleway"
import { Accordion, AccordionSummary, AccordionDetails, Grid, Button } from "@mui/material"
import { BiChevronDown } from "react-icons/bi"
import Link from "next/link"

const Archive2024 = () => {
  const buttonStyles = {
    padding: "20px 30px",
    width: "100%",
  }

  return (
    <Accordion style={{ marginTop: "0px" }}>
      <AccordionSummary
        expandIcon={<BiChevronDown style={{ fontSize: "2rem", color: "#7b1500" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2>2024</h2>
      </AccordionSummary>
      <AccordionDetails>
        <div className="buttons">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/18i2x4017LPahe4b_-B9gllYAnh35Em-v?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  SUMMER RECAP (5/2024 - 8/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/19jOilPHgtfgGzPATqCGfuzPJb1VyB6Sv?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  SEPTEMBER RECAP (9/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1GR1WV4Mm6W_htLIAmavYtw6m9qKjWBdx?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  Ice Cream Social (9/7/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1GR1WV4Mm6W_htLIAmavYtw6m9qKjWBdx">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  Meet the Parents (9/7/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1UWyBsWCzQQE3Ijakf1jka_MpNYU0c73a?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  Downtown Night (9/8/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1qn4rtphmKr_0-gEfJXFEzuz1Y2bK_3jE?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  FullMoonFest Showcase (9/10/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1tXqjZmRAVrHZ6kKIFegCzdWWkN6ZVO3l?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  Sunset Series at Carter&apos;s Mountain (9/12/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/19HK3vZZF1pseEXtzQhVWEZF8uxtbnLxr?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  Chipotle Fundraiser (9/16/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1oG7XBei6CZpLoMkrvuLuWRS9vYm9OHBD?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  October Recap (10/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/137QX9eKo1XymrZyxgCsv-C_2EnJRPE7Y?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  November Recap (11/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1YEbOxB12U1QbeAeQyMKeplnPLcV-Cma7?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  FULLMOONFEST (11/2/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1-IEsIHSfYoBmSqmkjSi5Rz353GZw5Kg7?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  NOVEMBER GBM + Chicken Eating Contest (11/6/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1yGMhNGJaeFdaaClGFfXsSoaPMvVU79Qw?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  Winter Recap (12/2024)
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link href="https://drive.google.com/drive/folders/1TN4DcuKpdFglEmdvl5T0oaY_MJx2Sc8g?usp=sharing">
                <Button variant="contained" size="medium" fullWidth style={buttonStyles}>
                  DECEMBER GBM (12/4/2024)
                </Button>
              </Link>
            </Grid>
            {/* Rest of the events are coming soon */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  Fall 2024 Sports Media (9/15/2024-10/24/2024)
                </Button>
              </Link>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  October GBM (10/4/2024)
                </Button>
              </Link>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  YAR Tailgate (10/7/2024)
                </Button>
              </Link>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=a674324198&e=f5afb523ef">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  Pumpkin Painting (10/14/2024)
                </Button>
              </Link>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="https://facebook.us20.list-manage.com/track/click?u=5df38cf096c70a0a7d9613210&id=3ab36bb1b1&e=f5afb523ef">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  ASU Semi-Formal (10/22/2024)
                </Button>
              </Link>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  FullMoonFest (10/28/2024)
                </Button>
              </Link>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  November GBM (11/1/2024)
                </Button>
              </Link>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  Thanksgiving Potluck (11/14/2024)
                </Button>
              </Link>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <Link href="">
                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  style={buttonStyles}
                >
                  Dollar Dim Sum (12/1/2024)
                </Button>
              </Link>
            </Grid> */}
          </Grid>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Archive2024
