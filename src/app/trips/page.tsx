import React from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import { Card } from "../components"

export default function Trips() {
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
        Trips
      </Typography>
      <Card>
        <p>Trips: 0</p>
      </Card>
    </Box>
  )
}
