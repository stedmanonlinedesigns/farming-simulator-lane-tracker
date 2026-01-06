import { getAllFields } from "@/lib/data"
import { FieldsNoFieldsDisplay } from "../fields-no-fields-display"
import FieldsDisplayClient from "./FieldsDisplayClient"
import type { Field } from "@/app/api/fields/route"

export const dynamic = "force-dynamic"

const FieldsDisplay = async () => {
  const fieldsData = await getAllFields()

  // TODO: Might could get rid of this Section or use it in the component
  if (fieldsData.length === 0) {
    return <FieldsNoFieldsDisplay />
  }

  // TODO: Might not have to do this now that I am resoloving in data helper
  const resolvedFieldsData: Field[] = fieldsData.map((field) => ({
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
