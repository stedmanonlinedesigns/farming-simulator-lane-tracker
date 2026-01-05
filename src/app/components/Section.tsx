import React from "react"
import Box, { type BoxProps } from "@mui/material/Box"

type SectionProps = BoxProps<"section"> & {
  children: React.ReactNode
}

const Section = ({ children, ...otherProps }: SectionProps) => {
  return (
    <Box
      role="section"
      pt={{ xs: "20px" }}
      pb={{ xs: "20px" }}
      px={{ xs: "20px" }}
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
