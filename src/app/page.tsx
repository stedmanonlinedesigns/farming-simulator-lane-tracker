"use client"
import React from "react"
import { useTripStore } from "@/store/tripStore"
import { useFieldsStore } from "@/store/fieldsStore"
import Button from "@mui/material/Button"

export default function Home() {
  const { allTrips, fetchAllTrips, loading } = useTripStore()

  const { allFields, fetchAllFields, addField } = useFieldsStore()

  React.useEffect(() => {
    fetchAllFields()
    fetchAllTrips()
  }, [fetchAllFields, fetchAllTrips])

  if (loading) {
    return (
      <div>
        <p style={{ fontWeight: "semibold" }}>Loading...</p>
      </div>
    )
  }

  const handleClick = () => {
    // incrementTrip()
    console.log('Button clicked.')
    addField()
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
        {/* {allTrips.length} */}
        <Button variant="contained" onClick={handleClick}>
          Add field
        </Button>
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
            {allFields.length.toString()}
          </p>
          <p style={{ margin: "0px", fontSize: "24px" }}>Fields</p>
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
            {allTrips.length}
          </p>
          <p style={{ margin: "0px", fontSize: "24px" }}>Trips</p>
        </div>
      </div>
    </main>
  )
}
