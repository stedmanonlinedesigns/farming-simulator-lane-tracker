import dayjs from "dayjs"
import { v4 as uuid } from "uuid"
import { getDatabase } from "./mongodb"
import { unstable_noStore as noStore } from "next/cache"
import type { Field } from "@/app/api/fields/route"

// TODO Maybe name this file fieldsData and update imports

export async function getAllFields(): Promise<Field[]> {
  noStore()

  // const performanceStart = performance.now()

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

  // const performanceDuration = Math.round(performance.now() - performanceStart)

  // console.info({
  //   log: `Fetched ${fieldsData.length} fields.`,
  //   timestamp: dayjs().format("ddd MM/DD/YYYY - HH:mm:ss:SSS"),
  //   performance: `${performanceDuration.toString()}ms`,
  // })

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

export async function addField(request: Request): Promise<void> {
  noStore()
  // const peformanceStart = performance.now()
  const db = await getDatabase()
  const fieldsCollection = db.collection(
    `${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`
  )
  const body = await request.json()
  // TODO: Not sure I need this next step
  const newBody = await body
  const { field_number, crop_details, trip_tracking } = newBody

  const newField: Field = {
    field_id: uuid(),
    field_number: field_number,
    crop_details: {
      status: crop_details.status,
      seed: crop_details.seed,
    },
    trip_tracking: {
      total_trips: trip_tracking.total_trips,
    },
    updated_at: dayjs().toDate(),
  }

  await fieldsCollection.insertOne(newField)

  // const performanceDuration = Math.round(performance.now() - peformanceStart)

  // console.info({
  //   log: `Field ${newField.field_number} was added to the database.`,
  //   timestamp: dayjs().format("ddd MM/DD/YYYY - HH:mm:ss:SSS"),
  //   performance: `${performanceDuration.toString()}ms`,
  // })

  // TODO: Not sure I need this next step
  // const fieldsData = await fieldsCollection.find({}).toArray()

  // return fieldsData
}

export async function deleteField(fieldId: string) {
  noStore()
  const peformanceStart = performance.now()
  const db = await getDatabase()
  const fieldsCollection = db.collection(
    `${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`
  )
  const field = await fieldsCollection.findOne({ field_id: fieldId })

  if (!field) {
    return `Found no field to delete.`
  }

  const deletedResult = await fieldsCollection.deleteOne({ field_id: fieldId })

  if (!deletedResult.acknowledged) {
    return "Was not able to delete field from collection."
  }

  const performanceDuration = Math.round(performance.now() - peformanceStart)

  console.info({
    log: `Field ${field.field_number} was deleted from the trips database.`,
    timestamp: dayjs().format("ddd MM/DD/YYYY - HH:mm:ss:SSS"),
    performance: `${performanceDuration.toString()}ms`,
  })

  return `Field ${field.field_number} was deleted.`
}
