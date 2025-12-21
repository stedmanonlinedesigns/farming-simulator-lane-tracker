"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { Box } from "@mui/material"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { IconTractor } from "@tabler/icons-react"

const HeaderNavigation = () => {
  const router = useRouter()

  const handleNavigateButtonClick = (path: string) => {
    router.push(path)
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <IconButton onClick={() => handleNavigateButtonClick("/")}>
        <IconTractor size={32} color="#F9DD30" />
      </IconButton>
      <Button
        onClick={() => handleNavigateButtonClick("/fields")}
        sx={{ color: "#F9DD30" }}
      >
        Fields
      </Button>
      <Button
        onClick={() => handleNavigateButtonClick("/trips")}
        sx={{ color: "#F9DD30" }}
      >
        Trips
      </Button>
    </Box>
  )
}

export default HeaderNavigation
