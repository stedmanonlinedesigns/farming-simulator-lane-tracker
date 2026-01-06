import { getDatabase } from "./mongodb"
import { unstable_noStore as noStore } from "next/cache"
import type { Field } from "@/app/api/fields/route"

export async function getAllFields(): Promise<Field[]> {
  noStore()

  const db = await getDatabase()
  const fieldsCollection = await db.collection(
    `${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`
  )

  const fieldsData = await fieldsCollection.find({}).toArray()

  const resolvedFields: Field[] = fieldsData.map((field) => ({
    field_id: field.field_id,
    field_number: field.field_number,
    crop_details: {
      status: field.crop_details.status,
      seed: field.crop_details.seed,
    },
    trip_tracking: field.trip_tracking,
    updated_at: field.updated_at,
  }))

  return resolvedFields
}

export async function getFieldById(fieldId: string): Promise<Field | null> {
  noStore()
  const db = await getDatabase()
  const fieldsCollection = db.collection(
    `${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`
  )

  const selectedField = await fieldsCollection.findOne({ field_id: fieldId })

  if (!selectedField) return null

  return {
    field_id: selectedField.field_id,
    field_number: selectedField.field_number,
    crop_details: {
      status: selectedField.crop_details.status,
      seed: selectedField.crop_details.seed,
    },
    trip_tracking: {
      total_trips: selectedField.trip_tracking.total_trips,
    },
    updated_at: selectedField.updated_at,
  }
}
