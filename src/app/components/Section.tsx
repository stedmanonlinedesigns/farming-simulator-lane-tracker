import React from "react"
import Box, { type BoxProps } from "@mui/material/Box"

type SectionProps = BoxProps<"section"> & {
  children: React.ReactNode
}

const Section = ({ children, ...otherProps }: SectionProps) => {
  return (
    <Box
      role="section"
      py={{ xs: "20px", md: "40px" }}
      pb={{ xs: "64px" }}
      px={{ xs: "20px", md: "40px" }}
      sx={{
        boxSizing: "border-box",
        width: "100%",
        background: "#1E6F41",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        ...otherProps.sx,
      }}
    >
      {children}
    </Box>
  )
}

export default Section
