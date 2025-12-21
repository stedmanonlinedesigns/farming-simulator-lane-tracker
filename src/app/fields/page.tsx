import React from "react"
import Link from "next/link"
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
      <Link href={"/"}>Link splash page</Link>
      <Card>
        <p>Trips: 0</p>
      </Card>
    </Box>
  )
}
