import { getDatabase } from "./mongodb"
import { unstable_noStore as noStore } from "next/cache"
import type { Field } from "@/app/api/fields/route"

export async function getAllFields() {
  noStore()

  const db = await getDatabase()
  const fieldsCollection = await db
    .collection(`${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`)
    .find({})
    .toArray()

  const resolvedFields: Field[] = fieldsCollection.map((field) => ({
    field_id: field.field_id,
    field_number: field.field_number,
    crop_details: field.crop_details,
    trip_tracking: field.trip_tracking,
    updated_at: field.updated_at,
  }))

  return resolvedFields
}
