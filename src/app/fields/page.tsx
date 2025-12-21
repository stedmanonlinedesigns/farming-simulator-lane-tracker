import React from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import { Card } from "../components"

export default function Fields() {
  return (
    <Box
      role={"main"}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" fontWeight={"bold"}>
        Fields
      </Typography>
      <Card>
        <p>Trips: 0</p>
      </Card>
    </Box>
  )
}
