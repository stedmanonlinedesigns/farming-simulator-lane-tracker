import { getDatabase } from "@/lib/mongodb"
import { Section } from "@/app/components"
import { FieldsNoFieldsDisplay } from "../fields-no-fields-display"
import FieldsDisplayClient from "./FieldsDisplayClient"
import type { Field } from "@/app/api/fields/route"

export const dynamic = 'force-dynamic'
export const revalidate = 0

const FieldsDisplay = async () => {
  const db = await getDatabase()
  const fieldsCollection = await db
    .collection(`${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`)
    .find({})
    .toArray()

  // TODO: Might could get rid of this Section or use it in the component
  if (fieldsCollection.length === 0) {
    return (
      <Section>
        <FieldsNoFieldsDisplay />
      </Section>
    )
  }

  const resolvedFieldsData: Field[] = fieldsCollection.map((field) => ({
    field_id: field.field_id,
    field_number: field.field_number,
    crop_details: field.crop_details,
    trip_tracking: field.trip_tracking,
    updated_at: field.updated_at,
  }))

  const sortedFields = resolvedFieldsData.sort(
    (a, b) => a.field_number - b.field_number
  )

  return <FieldsDisplayClient fields={sortedFields} />
}

export default FieldsDisplay
