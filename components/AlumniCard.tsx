"use client"

import "@fontsource/raleway"
import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardMedia } from "@mui/material"

interface AlumniCardProps {
  image?: string
  style?: React.CSSProperties
  children?: React.ReactElement | React.ReactElement[]
}

const AlumniCard: React.FC<AlumniCardProps> = ({ image, children }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const cardStyles: React.CSSProperties = {
    position: "relative",
    transition: "transform 0.3s ease-in-out",
  }

  const overlayStyles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? "visible" : "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease",
    color: isHovered ? "black" : "transparent",
    backgroundColor: isHovered ? "white" : "transparent",
    padding: "20px", // Increase the padding for a wider overlay
    borderRadius: "5px",
    width: "80%", // Set a wider width for the overlay
    maxHeight: "300px",
    overflowY: "auto",
    // maxWidth: '400px', // Limit the maximum width for better readability
    margin: "0 auto", // Center the overlay horizontally
  }

  // Splitting text into an array based on line breaks ("\n") and mapping them to Typography components
  // const textLines = text.split('\n').map((line, index) => (
  //   <Typography key={index} variant="body1">
  //     {line}
  //   </Typography>
  // ));

  return (
    <Card style={cardStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CardMedia component="img" style={{ width: "100%" }} image={image} alt="Card Image" />
      <CardContent style={overlayStyles}>{children}</CardContent>
    </Card>
  )
}

export default AlumniCard
