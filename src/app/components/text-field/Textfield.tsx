"use client"
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  FormHelperText,
} from "@mui/material"
import type {
  OutlinedInputProps,
  InputLabelProps,
  FormHelperTextProps,
} from "@mui/material"

export type TextfieldProps = {
  labelProps?: InputLabelProps
  helperTextProps?: FormHelperTextProps
} & OutlinedInputProps

const Textfield = ({
  id,
  label,
  value,
  onChange,
  labelProps,
  helperTextProps,
  ...otherInputProps
}: TextfieldProps) => {
  return (
    <FormControl fullWidth sx={{ width: '100%' }}>
      <InputLabel
        {...labelProps}
        id={labelProps && labelProps.id}
        htmlFor={labelProps && labelProps.htmlFor}
        sx={{
          color: "#F9DD30",
          fontSize: "18px",
          fontWeight: "700",
          ...labelProps?.sx,
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        {...otherInputProps}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      />
      <FormHelperText {...helperTextProps} />
    </FormControl>
  )
}

export default Textfield
