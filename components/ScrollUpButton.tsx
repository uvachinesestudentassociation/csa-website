"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { IconButton } from "@mui/material"
import { FaArrowCircleUp } from "react-icons/fa"

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)

    return () => {
      window.removeEventListener("scroll", toggleVisible)
    }
  }, [])

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 20,
    right: 30,
    display: visible ? "block" : "none",
    borderRadius: "50%",
    zIndex: 1000,
  }

  const iconStyle: React.CSSProperties = {
    color: "#7b1500",
    fontSize: "40px", // Increase the font size of the icon
  }

  return (
    <div style={buttonStyle} onClick={scrollToTop}>
      <IconButton>
        <FaArrowCircleUp style={iconStyle} />
      </IconButton>
    </div>
  )
}

export default ScrollUpButton
