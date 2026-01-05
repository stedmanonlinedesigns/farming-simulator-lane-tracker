"use client"
import React from "react"
import { useFieldsStore } from "@/store/fieldsStore"
import { Box } from "@mui/material"
import { Section } from "@/app/components"
import FieldsDisplayCard from "./FieldsDisplayCard"
import type { Field } from "@/app/api/fields/route"

type FieldsDisplayClientProps = {
  fields: Field[]
}

const FieldsDisplayClient = ({ fields }: FieldsDisplayClientProps) => {
  const { setAllFields } = useFieldsStore()

  React.useEffect(() => {
    setAllFields(fields)
  }, [setAllFields])

  return (
    <Section>
      <Box
        width={"100%"}
        display={{ xs: "flex" }}
        flexDirection={{ xs: "column" }}
        gap={{ xs: 3 }}
      >
        {fields.map((field) => (
          <FieldsDisplayCard key={field.field_id} field={field} />
        ))}
      </Box>
    </Section>
  )
}

export default FieldsDisplayClient
