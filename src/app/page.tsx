"use client"
import React from "react"
import { useTripStore } from "@/store/tripStore"
import { useFieldsStore } from "@/store/fieldsStore"
import Button from '@mui/material/Button';

export default function Home() {
  const { currentTrip, totalTrips, fetchTrips, loading, incrementTrip } =
    useTripStore()

  const { allFields, fetchAllFields } = useFieldsStore()

  React.useEffect(() => {
    fetchAllFields()
    fetchTrips()
  }, [fetchAllFields, fetchTrips])

  if (loading) {
    return (
      <div>
        <p style={{ fontWeight: "semibold" }}>Loading...</p>
      </div>
    )
  }

  const handleClick = () => {
    incrementTrip()
  }

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {allFields.length}
        <Button variant="contained" onClick={handleClick}>Inc</Button>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          padding: "20px 20px",
          minWidth: "320px",
          minHeight: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          border: "1px solid lightgray",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            fontFamily: "sans-serif",
          }}
        >
          <p
            style={{
              margin: "0px",
              fontSize: "48px",
              fontWeight: "bold",
              color: "green",
              fontFamily: "sans-serif",
            }}
          >
            {currentTrip}
          </p>
          <p style={{ margin: "0px", fontSize: "24px" }}>Current trip</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            fontFamily: "sans-serif",
          }}
        >
          <p
            style={{
              margin: "0px",
              fontSize: "48px",
              fontWeight: "bold",
              color: "green",
              fontFamily: "sans-serif",
            }}
          >
            {totalTrips}
          </p>
          <p style={{ margin: "0px", fontSize: "24px" }}>Total trips</p>
        </div>
      </div>
    </main>
  )
}
