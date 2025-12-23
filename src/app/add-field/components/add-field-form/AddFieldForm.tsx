"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useFieldsStore } from "@/store/fieldsStore"
import { Box, InputLabel, TextField, Button } from "@mui/material"
import { Section } from "@/app/components"

const AddFieldForm = () => {
  const router = useRouter()
  const { addField } = useFieldsStore()
  const [newFieldNumber, setNewFieldNumber] = React.useState<string>('')
  const [sowingStatus, setSowingStatus] = React.useState<string | null>(null)
  const [seed, setSeed] = React.useState<string | null>(null)

  // console.log(111, typeof parseInt(newFieldNumber))

  const handleAddField = () => {
    // console.log(222, typeof parseInt(newFieldNumber), newFieldNumber)
    addField(parseInt(newFieldNumber), sowingStatus, seed)
    router.push("/fields")
  }

  return (
    <Section>
      <Box
        display={{ xs: "flex" }}
        flexDirection={{ xs: "column" }}
        gap={{ xs: 2 }}
        boxSizing={"border-box"}
      >
        <Box
          display={{ xs: "flex" }}
          flexDirection={{ xs: "column" }}
          gap={{ xs: 0.5 }}
        >
          <InputLabel
            id="textfield-label-add-field-number"
            htmlFor="textfield-add-field-number"
            sx={{ color: "#F9DD30", fontSize: "18px", fontWeight: "700" }}
          >
            Field number
          </InputLabel>
          <TextField
            id="textfield-add-field-number"
            type="number"
            variant="outlined"
            fullWidth
            onChange={(e) => setNewFieldNumber(e.target.value)}
          />
        </Box>
        <Box
          boxSizing={"border-box"}
          display={{ xs: "flex" }}
          gap={{ xs: 2 }}
          width={{ xs: "100%" }}
        >
          <Box
            display={{ xs: "flex" }}
            flexDirection={{ xs: "column" }}
            gap={{ xs: 0.5 }}
          >
            <InputLabel
              id="textfield-label-sowing-status"
              htmlFor="textfield-sowing-status"
              sx={{ color: "#F9DD30", fontSize: "18px", fontWeight: "700" }}
            >
              Sowing status
            </InputLabel>
            <TextField
              id="textfield-sowing-status"
              variant="outlined"
              fullWidth
              onChange={(e) => setSowingStatus(e.target.value)}
            />
          </Box>
          <Box
            display={{ xs: "flex" }}
            flexDirection={{ xs: "column" }}
            gap={{ xs: 0.5 }}
          >
            <InputLabel
              id="textfield-label-seed"
              htmlFor="textfield-seed"
              sx={{ color: "#F9DD30", fontSize: "18px", fontWeight: "700" }}
            >
              Seed
            </InputLabel>
            <TextField
              id="textfield-seed"
              variant="outlined"
              fullWidth
              onChange={(e) => setSeed(e.target.value)}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{ background: "#F9DD30", color: "#103C23", fontWeight: 700 }}
          onClick={handleAddField}
        >
          Add field
        </Button>
      </Box>
    </Section>
  )
}

export default AddFieldForm
