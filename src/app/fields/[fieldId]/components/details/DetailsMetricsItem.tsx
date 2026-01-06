// import React from "react"
import { Box, Typography } from "@mui/material"
// import type { Field } from "@/app/api/fields/route"

type DetailsMetricsItemProps = {
  label: string
  labelSx?: any
  displayValue: string | number
  displayValueSx?: any
  //   field: Field
}

const DetailsMetricsItem = ({
  label,
  labelSx,
  displayValue,
  displayValueSx
}: //   field,
DetailsMetricsItemProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
      sx={{ width: "100%" }}
    >
      <Typography
        fontWeight={"bold"}
        textAlign={"center"}
        fontSize={"24px"}
        lineHeight={"24px"}
        sx={{ width: "100%", color: "#F9DD30", ...displayValueSx, }}
      >{`${displayValue}`}</Typography>
      <Typography
        variant="body2"
        fontSize={"16px"}
        lineHeight={"16px"}
        textAlign={"center"}
        sx={{ width: "100%", color: "white", ...labelSx }}
      >
        {label}
      </Typography>
    </Box>
  )
}


export default DetailsMetricsItem
