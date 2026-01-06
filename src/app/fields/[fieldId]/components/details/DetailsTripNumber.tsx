"use client"
import { useCurrentFieldStore } from "@/store/currentFieldStore"
import { Box, Typography } from "@mui/material"

const DetailsTripNumber = () => {
  const { currentField } = useCurrentFieldStore()

  if (!currentField) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Box sx={{}}>
      <Typography
        fontSize={"56px"}
        fontWeight={"bold"}
        sx={{ color: "white" }}
      >{`${currentField.trip_tracking.total_trips}`}</Typography>
    </Box>
  )
}

export default DetailsTripNumber
