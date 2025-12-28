"use client"
import { useEditFieldModal } from "./ModalContext"
import { Box, MenuItem } from "@mui/material"
import { Picker, Textfield } from "@/app/components"
import { cropStatuses, cropSeeds } from "@/constants"

const EditFieldModalForm = () => {
  const { editFieldType, inputValue, updateInputValue } = useEditFieldModal()

  return (
    <Box role="form" sx={{ width: "100%" }}>
      {editFieldType === "field_number" && (
        <Textfield label={"Field number"} type={"number"} value={inputValue} />
      )}

      {editFieldType === "status" && (
        <Picker
          labelId="picker-label-editFieldForm"
          id="picker-editFieldForm"
          label={"Status"}
          value={inputValue}
          // @ts-expect-error Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<string>
          onChange={(e) => updateInputValue(e.target.value)}
        >
          {cropStatuses.map((status, idx) => (
            <MenuItem key={idx} value={`${status}`}>{`${status}`}</MenuItem>
          ))}
        </Picker>
      )}

      {editFieldType === "seed" && (
        <Picker
          labelId="picker-label-editFieldForm"
          id="picker-editFieldForm"
          label={"Seed"}
          value={inputValue}
          // @ts-expect-error Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<string>
          onChange={(e) => updateInputValue(e.target.value)}
        >
          {cropSeeds.map((status, idx) => (
            <MenuItem key={idx} value={`${status}`}>{`${status}`}</MenuItem>
          ))}
        </Picker>
      )}
    </Box>
  )
}

export default EditFieldModalForm
