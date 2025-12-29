"use client"
import { useTripStore } from "@/store/tripStore"
import { Box, Typography } from "@mui/material"
import { Button } from "@/app/components"

type DisplaySectionProps = {}

const DisplaySection = ({}: DisplaySectionProps) => {
  const { allTrips } = useTripStore()

  return (
    <Box>
      <Typography
        pb={2}
        sx={{ color: "white" }}
      >{`Total trips: ${allTrips.length}`}</Typography>
      <Button variant="contained">Add field</Button>
    </Box>
  )
}

export default DisplaySection
