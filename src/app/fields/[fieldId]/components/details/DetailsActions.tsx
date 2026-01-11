import React from "react"
import { Box, Typography } from "@mui/material"
import { Button } from "@/app/components"
import type { Field } from "@/app/api/fields/route"

type DetailsActionsProps = {
  fieldId: Field['field_id']
}

const DetailsActions = ({ fieldId }: DetailsActionsProps) => {

  const handleClick = () => {
    console.log(555, fieldId)
  }

  return (
    <Box display={"flex"} py={1} sx={{ width: "100%" }}>
      <Button variant="contained" fullWidth onClick={handleClick}>
        Add trip
      </Button>
    </Box>
  )
}

export default DetailsActions
