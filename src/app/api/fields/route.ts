import { NextResponse } from "next/server"
import dayjs from "dayjs"
import { v4 as uuid } from "uuid"
import { getAllFields } from "@/lib/data"
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
  trip_tracking: {
    total_trips: number
    // trips_since_tramline: number,
    // tramline_interval: number,
    // last_tramline_tirp: number | null
  }
  //   stats: {
  //     total_time_minutes: number,
  //     average_trip_time_minutes: number | null
  //   },
  updated_at: Date
}

export async function GET() {
  try {
    const fieldsData = await getAllFields()
    // const performanceStart = performance.now()

    // For developement
    // if (fieldsData.length === 0) {
    //   const newField: Field = {
    //     field_id: uuid(),
    //     field_number: 1,
    //     crop_details: {
    //       status: "fallow",
    //       seed: "fallow",
    //     },
    //     trip_tracking: {
    //       total_trips: 0,
    //     },
    //     updated_at: dayjs().toDate(),
    //   }

    //   await fieldsCollection.insertOne(newField)
    // }

    // const performanceDuration = Math.round(performance.now() - performanceStart)

    // console.info({
    //   log: `Fetched ${fieldsData.length} fields.`,
    //   timestamp: dayjs().format("ddd MM/DD/YYYY - HH:mm:ss:SSS"),
    //   performance: `${performanceDuration.toString()}ms`,
    // })

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
      `${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`
    )

    const body = await request.json()
    const newBody = await body
    const { field_number, crop_details, trip_tracking } = newBody
    // console.log(888, body)

    const newField: Field = {
      field_id: uuid(),
      field_number: field_number,
      crop_details: crop_details,
      trip_tracking: trip_tracking,
      updated_at: dayjs().toDate(),
    }

    // const newField: Field = {
    //   field_id: uuid(),
    //   field_number: field_number,
    //   crop_details: {
    //     status: field_status,
    //     seed: field_seed,
    //   },
    // }

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
