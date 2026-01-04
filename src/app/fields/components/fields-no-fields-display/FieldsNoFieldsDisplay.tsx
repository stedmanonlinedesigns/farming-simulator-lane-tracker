"use client"
import { Box, Typography } from "@mui/material"
import { Section, PageActions } from "@/app/components"

const FieldsNoFieldsDisplay = () => {
  return (
    <>
      <PageActions />
      <Section>
        <Box>
          <Typography variant="h5" fontWeight={"bold"} sx={{ color: "white" }}>
            No fields were found.
          </Typography>
        </Box>
      </Section>
    </>
  )
}

export default FieldsNoFieldsDisplay
