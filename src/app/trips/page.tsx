"use client"
import React from "react"
import { useTripStore } from "@/store/tripStore"
import { Main, PageHeading, Card } from "../components"

export default function Trips() {
  const { allTrips, fetchAllTrips } = useTripStore()
  console.log(555, allTrips)

  React.useEffect(() => {
    fetchAllTrips()
  }, [fetchAllTrips])

  return (
    <Main>
      <PageHeading title="Trips" />
      <Card>
        <p>{`Total trips: ${allTrips.length}`}</p>
      </Card>
    </Main>
  )
}
