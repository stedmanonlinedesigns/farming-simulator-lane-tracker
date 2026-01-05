import { getDatabase } from "@/lib/mongodb"
import { Main, PageActions } from "@/app/components"
import { Heading, DisplaySection } from "./components"
import type { Field } from "@/app/api/fields/route"

type FieldPageProps = {
  params: {
    fieldId: string
  }
}

const FieldPage = async ({ params }: FieldPageProps) => {
  const resolvedParams = await params
  const db = await getDatabase()
  const fieldData = await db
    .collection(`${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`)
    .findOne({ field_id: resolvedParams.fieldId })

  if (!fieldData) {
    return <div>Field not found</div>
  }

  const resolvedFieldData: Field = {
    field_id: fieldData.field_id,
    field_number: fieldData.field_number,
    crop_details: fieldData.crop_details,
    trip_tracking: fieldData.trip_tracking,
    updated_at: fieldData.updated_at,
  }

  return (
    <Main>
      <PageActions />
      <Heading field={resolvedFieldData} />
      <DisplaySection field={resolvedFieldData} />
    </Main>
  )
}

export default FieldPage
