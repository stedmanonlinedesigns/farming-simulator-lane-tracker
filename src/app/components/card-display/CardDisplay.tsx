import React from "react"
import Box from "@mui/material/Box"
import { Section } from "../../components"

type CardDisplayProps = {
  children: React.ReactNode
}

const CardDisplay = ({ children }: CardDisplayProps) => {
  return (
    <Section>
      <Box
        width={"100%"}
        display={{ xs: "flex" }}
        flexDirection={{ xs: "column" }}
        gap={{ xs: 3 }}
      >
        {children}
      </Box>
    </Section>
  )
}

export default CardDisplay
