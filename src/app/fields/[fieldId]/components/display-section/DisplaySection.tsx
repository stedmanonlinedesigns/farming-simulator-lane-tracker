"use client"
import { useTripStore } from "@/store/tripStore"
import { Box, Typography } from "@mui/material"
import { Section, Card, Button } from "@/app/components"
import type { Field } from "@/app/api/fields/allFields/route"

type DisplaySectionProps = {
  field: Field
}

const DisplaySection = ({ field }: DisplaySectionProps) => {
  const { allTrips, addTrip } = useTripStore()

  const filteredTrips = allTrips
    .filter((trip) => trip.field_id === field.field_id)
    .sort((a, b) => b.trip_number - a.trip_number)

  const nextTripNumber =
    filteredTrips.length > 0
      ? Math.max(...filteredTrips.map((trip) => trip.trip_number)) + 1
      : 1

  const handleAddTrip = () => {
    addTrip(nextTripNumber, `${field.field_id}`, { started: null, ended: null })
  }

  return (
    <Section>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        pb={2}
        sx={{ width: "100%" }}
      >
        <Typography
          pb={2}
          sx={{ color: "white" }}
        >{`Total trips: ${allTrips.length}`}</Typography>
        <Button variant="contained" onClick={handleAddTrip}>
          Add field
        </Button>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        sx={{ width: "100%" }}
      >
        {filteredTrips.map((trip) => (
          <Card key={trip.trip_id}>
            <Card.Content>
              <Typography
                sx={{ color: "white" }}
              >{`Trip #${trip.trip_number}`}</Typography>
            </Card.Content>
          </Card>
        ))}
      </Box>
    </Section>
  )
}

export default DisplaySection
