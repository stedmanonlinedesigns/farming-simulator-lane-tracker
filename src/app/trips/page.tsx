"use client"
import React from "react"
import { useTripStore } from "@/store/tripStore"
import { useFetchAll } from "@/hooks/useFetchAll"
import { Main, PageHeading, Card } from "../components"

export default function Trips() {
  useFetchAll()
  const { allTrips } = useTripStore()

  return (
    <Main>
      <PageHeading title="Trips" />
      <Card>
        {/* <p>Trips</p> */}
        <p>{`Total trips: ${allTrips.length}`}</p>
      </Card>
    </Main>
  )
}
