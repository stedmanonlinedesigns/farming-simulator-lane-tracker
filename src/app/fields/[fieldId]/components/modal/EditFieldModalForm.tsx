"use client"
import React from "react"
import { useAppStore } from "@/store/appStore"
import type { EditFieldModalUpdate } from "@/store/appStore"
import { Box, MenuItem } from "@mui/material"
import { Picker, Textfield } from "@/app/components"
import { cropStatuses, cropSeeds } from "@/constants"

type EditFieldModalFormProps = {
  updateType: EditFieldModalUpdate
}

const EditFieldModalForm = ({ updateType }: EditFieldModalFormProps) => {
  const { inputValue, setInputValue } = useAppStore()
  // const [inputValue, setInputValue] = React.useState("")
    console.log(777, inputValue)
  return (
    <Box role="form" sx={{ width: "100%" }}>
      {updateType === "status" && (
        <Picker
          labelId="picker-label-editFieldForm"
          id="picker-editFieldForm"
          label={"Status"}
          value={inputValue}
          // @ts-expect-error Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<string>
          onChange={(e) => setInputValue(e.target.value)}
        >
          {cropStatuses.map((status, idx) => (
            <MenuItem key={idx} value={`${status}`}>{`${status}`}</MenuItem>
          ))}
        </Picker>
      )}

      {updateType === "seed" && (
        <Picker
          labelId="picker-label-editFieldForm"
          id="picker-editFieldForm"
          label={"Seed"}
          value={inputValue}
          // @ts-expect-error Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<string>
          onChange={(e) => setInputValue(e.target.value)}
        >
          {cropSeeds.map((status, idx) => (
            <MenuItem key={idx} value={`${status}`}>{`${status}`}</MenuItem>
          ))}
        </Picker>
      )}

      {updateType === "fieldNumber" && (
        <Textfield label={"Field number"} value={inputValue} />
      )}
    </Box>
  )
}

export default EditFieldModalForm
