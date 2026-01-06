"use client"
import React from "react"
import { useCurrentFieldStore } from "@/store/currentFieldStore"
import { Section } from "@/app/components"
import DetailsTripNumber from "./DetailsTripNumber"
import DetailsMetrics from "./DetailsMetrics"
import DetailsActions from "./DetailsActions"
import type { Field } from "@/app/api/fields/route"

type DetailsProps = {
  field: Field
}

const Details = ({ field }: DetailsProps) => {
  const { currentField, setCurrentField } = useCurrentFieldStore()

  React.useEffect(() => {
    setCurrentField(field)
  }, [setCurrentField])

  if (!currentField) {
    return (
      <div>
        <p>Loading field.</p>
      </div>
    )
  }

  return (
    <Section sx={{ gap: "20px" }}>
      <DetailsTripNumber />
      <DetailsMetrics />
      <DetailsActions />
    </Section>
  )
}

export default Details
