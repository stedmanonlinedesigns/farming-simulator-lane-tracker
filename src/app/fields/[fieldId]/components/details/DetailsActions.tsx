import React from "react"
import { Box, Typography } from "@mui/material"
import { Button } from "@/app/components"

type DetailsActionsProps = {}

const DetailsActions = ({}: DetailsActionsProps) => {
  return (
    <Box display={"flex"} py={1} sx={{ width: "100%" }}>
      <Button variant="contained" fullWidth>
        Start field
      </Button>
    </Box>
  )
}

export default DetailsActions
