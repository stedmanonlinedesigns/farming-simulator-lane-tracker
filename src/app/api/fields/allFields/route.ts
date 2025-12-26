import { NextResponse } from "next/server"
import dayjs from "dayjs"
import { v4 as uuid } from "uuid"
import { getDatabase } from "@/lib/mongodb"

// TODO: Add update field and delete field

export type CropSeed =
  | "wheat"
  | "barley"
  | "sorghum"
  | "canola"
  | "grass"
  | "sugarcane"
  | "poplar"
  | "corn"
  | "soybeans"
  | "sunflowers"
  | "oats"
  | "cotton"
  | "fallow"
  | ""
  | null

export type CropStatus = "fallow" | "planting" | "planted" | "" | null

export type Field = {
  field_id: string
  field_number: number
  crop_details: {
    status: CropStatus
    seed: CropSeed
  }
}

export async function GET() {
  try {
    const db = await getDatabase()
    const fieldsCollection = db.collection(
      `${process.env.MONGODB_DATABASE_COLLECTION_TWO}`
    )
    const performanceStart = performance.now()
    let fieldsData = await fieldsCollection.find().toArray()

    // For developement
    if (fieldsData.length === 0) {
      const newField: Field = {
        field_id: uuid(),
        field_number: 11,
        crop_details: {
          status: "planting",
          seed: "corn",
        },
      }

      await fieldsCollection.insertOne(newField)
    }

    const performanceDuration = Math.round(performance.now() - performanceStart)

    console.info({
      log: `Fetched ${fieldsData.length} fields.`,
      timestamp: dayjs().format("ddd MM/DD/YYYY - HH:mm:ss:SSS"),
      performance: `${performanceDuration.toString()}ms`,
    })

    return NextResponse.json({ fieldsData })
  } catch (error) {
    console.error("Failed to fetch all fields.", error)

    return NextResponse.json(
      { error: "Failed to fetch all fields." },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const peformanceStart = performance.now()
    const db = await getDatabase()
    const fieldsCollection = db.collection(
      `${process.env.MONGODB_DATABASE_COLLECTION_TWO}`
    )

    const body = await request.json()
    const newBody = await body
    const { field_number, field_status, field_seed } = newBody
    console.log(888, body)

    const newField: Field = {
      field_id: uuid(),
      field_number: field_number,
      crop_details: {
        status: field_status,
        seed: field_seed,
      },
    }

    await fieldsCollection.insertOne(newField)

    const fieldsData = await fieldsCollection.find({}).toArray()

    const performanceDuration = Math.round(performance.now() - peformanceStart)

    console.info({
      log: `Field ${newField.field_number} was added to the database.`,
      timestamp: dayjs().format("ddd MM/DD/YYYY - HH:mm:ss:SSS"),
      performance: `${performanceDuration.toString()}ms`,
    })

    return NextResponse.json({ fieldsData })
  } catch (error) {
    console.error("Failed to add field. ", error)

    NextResponse.json({ error: "Failed to add field." }, { status: 500 })
  }
}
