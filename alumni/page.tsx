"use client"
import "app/globals.css"
import "@fontsource/raleway"
import AlumniCard from "@components/AlumniCard"
import { Grid } from "@mui/material"
import alumniData from "./alumni-data.json"

const Alumni = () => {
  const alumniGridItems = alumniData.map((alumniYearData) => {
    const gridItems = []
    for (const person of alumniYearData.people) {
      let display = person.name
      if (person.roles.includes("exec")) display += "*"
      if (person.roles.includes("oboard")) display += "^"
      if (person.roles.includes("famhead")) display += "+"

      gridItems.push(
        <Grid item xs={4}>
          {display}
        </Grid>,
      )
    }

    return (
      <Grid item xs={8} xl={6} key={alumniYearData.year}>
        <AlumniCard image={alumniYearData.imageSrc}>
          <b>Class of {alumniYearData.year}</b>
          <Grid container>
            {gridItems}
            <Grid item xs={12}>
              *: executive board, ^: officer board, +: famhead
            </Grid>
          </Grid>
        </AlumniCard>
      </Grid>
    )
  })

  return (
    <div className="content">
      <div className="header">
        <h1>Alumni</h1>
      </div>
      <Grid container justifyContent={"center"} spacing={8}>
        {alumniGridItems}
      </Grid>
    </div>
  )
}

export default Alumni
