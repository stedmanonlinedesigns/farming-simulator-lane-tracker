"use client"
import { FormControl, InputLabel, Select, FormHelperText } from "@mui/material"
import {
  FormControlProps,
  InputLabelProps,
  FormHelperTextProps,
  SelectProps,
} from "@mui/material"

type PickerProps = {
  formControlProps?: FormControlProps
  labelProps?: InputLabelProps
  helperTextProps?: FormHelperTextProps
} & SelectProps

const Picker = ({
  id,
  label,
  value,
  onChange,
  formControlProps,
  labelProps,
  helperTextProps,
  children,
}: PickerProps) => {
  return (
    <FormControl {...formControlProps} sx={{ width: '100%' }}>
      <InputLabel
        {...labelProps}
        sx={{
          color: "#F9DD30",
          fontSize: "18px",
          fontWeight: "700",
          ...labelProps?.sx,
        }}
      >
        {label}
      </InputLabel>
      <Select
        id={id}
        labelId={labelProps?.id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {children}
      </Select>
      <FormHelperText {...helperTextProps} />
    </FormControl>
  )
}

export default Picker
