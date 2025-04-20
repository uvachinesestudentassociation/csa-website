"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

interface PhotoCardProps {
  imagePath: string
  name: string
  description?: string
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imagePath, name, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    if (description) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (description) {
      setIsHovered(false)
    }
  }

  const textLines = name.split("\n").map((line, index) => (
    <Typography key={index} variant="body1">
      {line}
    </Typography>
  ))

  const cardStyles: React.CSSProperties = {
    position: "relative",
    transition: "filter 0.3s ease",
    filter: isHovered ? "brightness(70%)" : "brightness(100%)",
  }

  const descriptionTextStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
    padding: "10px",
  }

  return (
    <Card style={cardStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {description && <div style={descriptionTextStyles}>{description}</div>}
      <CardMedia component="img" height="100" image={imagePath} alt={name} />
      <CardContent>{textLines}</CardContent>
    </Card>
  )
}

export default PhotoCard
