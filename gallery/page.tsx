"use client"
import "app/globals.css"
import "@fontsource/raleway"
import { Grid } from "@mui/material"
import PhotoCard from "@/app/components/PhotoCard"
import ScrollUpButton from "@components/ScrollUpButton"

///////////////////////////////////////////////////////////
//
// CONTENT FORMAT:  ["image_name.file_extension", "title"]
//
///////////////////////////////////////////////////////////

const contents = [
  // YEAR 2024
  ["fmf_nov_2024.JPG", "FullMoonFest (11/2/2024)"],
  ["asu_group_oct_2024.jpg", "ASU Semi-Formal (10/18/2024)"],
  ["yar_2024.jpg", "YAR Tailgate (10/5/2024)"],
  ["ice_cream_social_2024.jpg", "Ice Cream Social (9/7/2024)"],

  // YEAR 2023
  ["asu_group_oct_2023.JPG", "ASU Semi-Formal (10/22/2023)"],
  ["asu_exec_2023.jpg", "2023-24 Exec at ASU Semi-Formal (10/22/2023)"],
  ["pumpkin_painting_2023.jpg", "Pumpkin Painting (10/14/2023)"],
  ["yar_2023.jpg", "YAR Tailgate (10/7/2023)"],
  ["gbm_2023.jpg", "General Body Meeting (10/4/2023)"],
  ["sunset_series_2023.jpg", "Class of 2026 at Sunset Series (9/14/2023)"],
  ["downtown_group2_2023.jpg", "Downtown Night (9/3/2023)"],
  ["downtown_group1_2023.jpg", "Downtown Night (9/3/2023)"],
  ["mtp_2023.JPG", "Glorious Goats at Meet the Parents (9/2/2023)"],
  ["chinafest_fourthyears_2023.JPG", "Fourth Years at Chinafest (2/25/2023)"],
  ["chinafest_girlsmodern_2023.JPG", "Girls Modern at Chinafest (2/25/2023)"],
  ["chinafest_fym_2023.JPG", "First Year Modern at Chinafest (2/25/2023)"],
  ["chinafest_fashionshow_2023.JPG", "Fashion Show at Chinafest (2/25/2023)"],
  ["chinafest_dragon_2023.JPG", "Dragon Dance at Chinafest (2/25/2023)"],
  ["chinavasian_2023.jpg", "ChinaVAsian at Virginia Tech (2/4/2023)"],
  ["asu_group_jan_2023.JPG", "ASU Semi-Formal (1/27/2023)"],

  // YEAR 2022
  ["frisbee_2022.JPG", "Frisbee IM-Rec Champs (12/6/2022)"],
  ["dds_group2_2022.JPG", "Dollar Dim Sum (12/3/2022)"],
  ["dds_group1_2022.JPG", "Dollar Dim Sum (12/3/2022)"],
  ["basketball_2022.JPG", "Basketball Practice (10/30/2022)"],
  ["fmf_2022.JPG", "Traditional Partner Dance at FullMoonFest (10/22/2022)"],
  ["football_2022.JPG", "Football Practice (10/16/2022)"],
  ["yar_2022.JPG", "Class of 2022 at YAR Tailgate (10/8/2022)"],
  ["comm_dinner_2022.JPG", "Community Dinner at O'Hill (9/14/2022)"],
  ["smores_2022.jpg", "S'mores Night (8/31/2022)"],
  ["fourth_year_reception_2022.jpg", "Class of 2022 at Fourth Year Reception (5/1/2022)"],
]

const Gallery = () => {
  return (
    <div className="content">
      <div className="header">
        <h1>Gallery</h1>
      </div>

      <Grid container spacing={2}>
        {contents.map(([imageName, caption], index) => (
          <Grid item xs={12} sm={4} key={index}>
            <PhotoCard imagePath={`/images/gallery/${imageName}`} name={caption} />
          </Grid>
        ))}
      </Grid>
      <ScrollUpButton />
    </div>
  )
}

export default Gallery
