import { Button as MuiButton } from "@mui/material"
import type { ButtonProps as MuiButtonProps } from "@mui/material"

type ButtonProps = MuiButtonProps

const Button = ({ variant, children, ...otherprops }: ButtonProps) => {
  return (
    <MuiButton
      disableElevation
      variant={variant}
      sx={{
        background: variant === "contained" ? "#F9DD30" : "none",
        color: "#103C23",
        fontWeight: 700,
        textTransform: "capitalize",
        borderColor: variant === "contained" ? "#F9DD30" : "#103C23",
      }}
      {...otherprops}
    >
      {children}
    </MuiButton>
  )
}

export default Button
