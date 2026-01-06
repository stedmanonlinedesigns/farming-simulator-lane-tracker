import { NextResponse } from "next/server"
import dayjs from "dayjs"
import { v4 as uuid } from "uuid"
import { getAllFields, addField } from "@/lib/data"
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
    // total_tramlines: number
    // trips_since_tramline: number,
    // tramline_interval: number,
    // last_tramline_trip: number | null
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
    addField(request)
    const fieldsData = getAllFields()

    return NextResponse.json({ fieldsData })
  } catch (error) {
    console.error("Failed to add field. ", error)

    NextResponse.json({ error: "Failed to add field." }, { status: 500 })
  }
}
