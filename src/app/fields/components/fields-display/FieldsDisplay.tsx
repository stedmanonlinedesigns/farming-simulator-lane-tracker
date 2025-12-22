"use client"
import React from "react"
import { useFieldsStore } from "@/store/fieldsStore"
import { CardDisplay } from "@/app/components"
import FieldsDisplayCard from "./FieldsDisplayCard"

const FieldsDisplay = () => {
  const { allFields, fetchAllFields } = useFieldsStore()

  React.useEffect(() => {
    fetchAllFields()
  }, [fetchAllFields])

  return (
    <CardDisplay>
      {allFields &&
        allFields.map((field) => (
          <FieldsDisplayCard key={field.field_id} field={field} />
        ))}
    </CardDisplay>
  )
}

export default FieldsDisplay
