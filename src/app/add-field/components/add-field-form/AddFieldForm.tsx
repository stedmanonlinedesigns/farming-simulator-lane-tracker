"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useFieldsStore } from "@/store/fieldsStore"
import {
  Box,
  FormControl,
  InputLabel,
  Button,
  OutlinedInput,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material"
import { Section } from "@/app/components"
import type { CropStatus, CropSeed } from "@/app/api/fields/allFields/route"

const cropStatuses: CropStatus[] = ["fallow", "planted", "planting"]

const cropSeeds: CropSeed[] = [
  "barley",
  "barley",
  "canola",
  "corn",
  "cotton",
  "fallow",
  "grass",
  "oats",
  "poplar",
  "soybeans",
  "sorghum",
  "sunflowers",
  "sugarcane",
  "wheat",
]

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
        <FormControl fullWidth>
          <Box>
            <InputLabel
              id="textfield-label-add-field-number"
              htmlFor="textfield-add-field-number"
              sx={{ color: "#F9DD30", fontSize: "18px", fontWeight: "700" }}
            >
              Field number
            </InputLabel>
            <OutlinedInput
              id="textfield-add-field-number"
              type="number"
              fullWidth
              label={"Field number"}
              onChange={(e) => setNewFieldNumber(e.target.value)}
            />
            <FormHelperText>Helper text</FormHelperText>
          </Box>
        </FormControl>

        <Box
          display={{ xs: "flex" }}
          justifyContent={{ xs: "space-between" }}
          gap={{ xs: 2 }}
        >
          <FormControl fullWidth>
            <InputLabel
              id="select-label-crop-status"
              htmlFor="select-crop-status"
              sx={{ color: "#F9DD30", fontSize: "18px", fontWeight: "700" }}
            >
              Crop status
            </InputLabel>
            <Select
              labelId="select-label-crop-status"
              id="select-crop-status"
              label={"Crop status"}
              value={sowingStatus}
              // @ts-expect-error Argument of type 'string | null' is not assignable to parameter of type 'SetStateAction<CropStatus>
              onChange={(e) => setSowingStatus(e.target.value)}
            >
              {cropStatuses &&
                cropStatuses.map((status, idx) => (
                  <MenuItem
                    key={idx}
                    value={`${status}`}
                  >{`${status}`}</MenuItem>
                ))}
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel
              id="select-label-crop-seed"
              htmlFor="select-crop-seed"
              sx={{ color: "#F9DD30", fontSize: "18px", fontWeight: "700" }}
            >
              Crop seed
            </InputLabel>
            <Select
              labelId="select-label-crop-seed"
              id="select-crop-seed"
              label={"Crop seed"}
              value={seed}
              // @ts-expect-error Argument of type 'string | null' is not assignable to parameter of type 'SetStateAction<CropStatus>
              onChange={(e) => setSeed(e.target.value)}
            >
              {cropSeeds &&
                cropSeeds.map((seed, idx) => (
                  <MenuItem key={idx} value={`${seed}`}>{`${seed}`}</MenuItem>
                ))}
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
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
