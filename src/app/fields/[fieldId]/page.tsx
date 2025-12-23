"use client"
import { useParams } from "next/navigation"
import { useFieldsStore } from "@/store/fieldsStore"
import { Main, PageHeading, PageActions } from "@/app/components"

const FieldPage = () => {
  const params = useParams()
  const { allFields } = useFieldsStore()
  const fieldId = params.fieldId as string

  const fieldsByFieldId = Object.fromEntries(
    allFields.map((field) => [field.field_id, field])
  )

  const field = fieldsByFieldId[fieldId]

  if (!field) {
    return <div>Field not found</div>
  }

  return (
    <Main>
      <PageActions />
      <PageHeading
        title={`Field ${field.field_number.toString()}`}
        subtitle={`${field.crop_details.status} | ${field.crop_details.seed}`}
      />
    </Main>
  )
}

export default FieldPage
