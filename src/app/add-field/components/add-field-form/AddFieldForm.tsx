"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useFieldsStore } from "@/store/fieldsStore"
import { Box, Button, MenuItem } from "@mui/material"
import { Section, Textfield, Picker } from "@/app/components"
import type { CropStatus, CropSeed } from "@/app/api/fields/route"
import { cropStatuses, cropSeeds } from "@/constants"

const AddFieldForm = () => {
  const router = useRouter()
  const { addField } = useFieldsStore()
  const [newFieldNumber, setNewFieldNumber] = React.useState<string>("")
  const [sowingStatus, setSowingStatus] = React.useState<CropStatus>("")
  const [seed, setSeed] = React.useState<CropSeed>("")

  const handleAddField = () => {
    addField(parseInt(newFieldNumber), sowingStatus, seed)
    router.push("/fields")
  }

  return (
    <Section>
      <Box
        width={{ xs: "100%" }}
        display={{ xs: "flex" }}
        flexDirection={{ xs: "column" }}
        gap={{ xs: 2 }}
        boxSizing={"border-box"}
        sx={{ boxSizing: "border-box" }}
      >
        <Textfield
          id={"textfield-add-fieldnumber"}
          type={"number"}
          label={"Field number"}
          value={newFieldNumber}
          onChange={(e) => setNewFieldNumber(e.target.value)}
          labelProps={{
            id: "textfield-label-add-fieldnumber",
            htmlFor: "textfield-add-fieldnumber",
          }}
          helperTextProps={{
            children: "Enter a field that has not been saved before.",
          }}
        />

        <Box
          display={{ xs: "flex" }}
          justifyContent={{ xs: "space-between" }}
          gap={{ xs: 2 }}
        >
          <Picker
            id="select-crop-status"
            label={"Status"}
            value={sowingStatus}
            labelId="select-label-crop-status"
            // @ts-expect-error Argument of type 'string | null' is not assignable to parameter of type 'SetStateAction<CropStatus>
            onChange={(e) => setSowingStatus(e.target.value)}
            formControlProps={{ fullWidth: true }}
            labelProps={{
              id: "select-label-crop-status",
              htmlFor: "select-crop-status",
            }}
            helperTextProps={{ children: "This is helper text." }}
          >
            {cropStatuses.map((status, idx) => (
              <MenuItem key-={idx} value={`${status}`}>{`${status}`}</MenuItem>
            ))}
          </Picker>

          <Picker
            id="select-crop-seed"
            label={"Seed"}
            value={seed}
            labelId="select-label-crop-seed"
            // @ts-expect-error Argument of type 'string | null' is not assignable to parameter of type 'SetStateAction<CropStatus>
            onChange={(e) => setSeed(e.target.value)}
            formControlProps={{ fullWidth: true }}
            labelProps={{
              id: "select-label-crop-seed",
              htmlFor: "select-crop-seed",
            }}
            helperTextProps={{ children: "This is helper text." }}
          >
            {cropSeeds.map((seed, idx) => (
              <MenuItem key-={idx} value={`${seed}`}>{`${seed}`}</MenuItem>
            ))}
          </Picker>
        </Box>

        <Button
          variant="contained"
          sx={{ background: "#F9DD30", color: "#103C23", fontWeight: 700 }}
          disableElevation
          onClick={handleAddField}
        >
          Add field
        </Button>
      </Box>
    </Section>
  )
}

export default AddFieldForm
