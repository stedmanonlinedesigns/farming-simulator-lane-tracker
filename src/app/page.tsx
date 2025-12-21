"use client"
import React from "react"
import Link from "next/link"
import { useTripStore } from "@/store/tripStore"
import { useFieldsStore } from "@/store/fieldsStore"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import { Typography } from "@mui/material"

export default function Home() {
  const { allTrips, fetchAllTrips, loading } = useTripStore()
  const { allFields, fetchAllFields, addField, currentField, setCurrentField } =
    useFieldsStore()

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

  const handleAddField = () => {
    addField(13, "planting", "oats")
  }

  const handleChange = (event: SelectChangeEvent) => {
    const fieldsByFieldNumber = Object.fromEntries(
      allFields.map((field) => [field.field_number, field])
    )

    const field = fieldsByFieldNumber[event.target.value]
    setCurrentField(field)
  }

  return (
    <Box
      role='main'
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" fontWeight={'bold'}>Welcome</Typography>
      <Typography>Link to <Link href={'/fields'}>Fields</Link> page</Typography>
      <Typography>Link to <Link href={'/trips'}>Trips</Link> page</Typography>

      {/* {allFields && `${allFields.length.toString()} fields`} */}

      {/* <div
        style={{
          paddingBottom: "20px",
          minWidth: "320px",
          maxWidth: "320px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Button variant="contained" onClick={handleAddField}>
          Add field
        </Button>
      </div> */}

      {/* <Box sx={{ width: 320, paddingBottom: "20px" }}>
        <FormControl
          fullWidth
          size="small"
          sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <InputLabel id="select-label-currentField">Select a field</InputLabel>
          <Select
            labelId="select-label-currentField"
            id="select-currentField"
            value={!currentField ? "" : currentField.field_number.toString()}
            label="Select a field"
            onChange={handleChange}
          >
            {allFields &&
              allFields.map((field) => (
                <MenuItem
                  key={field.field_id}
                  value={field.field_number}
                >{`Field: ${field.field_number}`}</MenuItem>
              ))}
          </Select>
          {currentField && (
            <Box sx={{ display: "flex", gap: "12px" }}>
              <TextField
                id="textfield-status"
                label="Field status"
                variant="outlined"
              />
              <TextField
                id="textfield-seed"
                label="Field seed"
                variant="outlined"
              />
            </Box>
          )}
        </FormControl>
      </Box> */}

      {/* <div
        style={{
          boxSizing: "border-box",
          padding: "20px 20px",
          minWidth: "320px",
          maxWidth: "320px",
          minHeight: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          border: "1px solid lightgray",
          borderRadius: "4px",
        }}
      >
        {!currentField ? (
          <div>
            <p>No field has been selected.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                margin: "0px",
                fontSize: "48px",
                fontWeight: "bold",
                color: "green",
                fontFamily: "sans-serif",
              }}
            >
              {currentField.field_number}
            </p>
            <p>
              {!currentField.crop_details.seed
                ? "fallow"
                : currentField.crop_details.seed}
            </p>
            <p>Current</p>
          </div>
        )}
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
      </div> */}
    </Box>
  )
}
