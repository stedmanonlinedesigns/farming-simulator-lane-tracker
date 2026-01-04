"use client"
import { Box, Typography } from "@mui/material"

type HeadingTitleProps = {
  children: string
}

const HeadingTitle = ({ children }: HeadingTitleProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h1"
        fontSize={{ xs: "40px", sm: "48px", md: "56px", lg: "64px" }}
        fontWeight={"bold"}
        sx={{ width: "100%", color: "#F9DD30" }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default HeadingTitle
