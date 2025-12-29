"use client"
import { useParams } from "next/navigation"
import { useFieldsStore } from "@/store/fieldsStore"
import { useFetchAll } from "@/hooks/useFetchAll"
import { Main, PageActions } from "@/app/components"
import { Heading, DisplaySection } from "./components"

const FieldPage = () => {
  useFetchAll()
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
      <Heading field={field} />
      <DisplaySection field={field} />
    </Main>
  )
}

export default FieldPage
