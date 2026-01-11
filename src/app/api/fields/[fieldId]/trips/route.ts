// /api/fields/[field_id]/trips
//   GET - Get all trips for a field (with pagination)
//   POST - Start a new trip
import { NextResponse } from "next/server"
import { getFieldById } from "@/lib/data"
// import type { Trip } from "@/app/api/trips/route"

import { getAllTrips, getTripsByFieldId, addTrip } from "@/lib/tripsData"
import { getDatabase } from "@/lib/mongodb"

export async function GET(
  request: Request,
  { params }: { params: { fieldId: string } }
) {
  try {
    const resolovedParams = await params
    // const allTrips = getAllTrips()
    // const fieldById = await getFieldById(resolovedParams.fieldId)

    // const db = getDatabase()
    // const fieldsCollection = (await db).collection(`${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`)
    const tripsByFieldId = await getTripsByFieldId(resolovedParams.fieldId)
    // const field = getFieldById(resolovedParams.fieldId)

    return NextResponse.json(tripsByFieldId)
  } catch (error) {
    return NextResponse.json({ error: 'Could not find trips for this field.' }, { status: 500 })
  }
}

// TODO: get current field document
// TODO: calculate trips_until_timeline
// TODO: determine if a tramline trip
// TODO: create trip document with new date object
// TODO: "Atomically increment" total_trips and trips_since_timeline

// Starting a trip
export async function POST(request: Request) {
  try {
    const addedTrip = await addTrip(request)

    return NextResponse.json(addedTrip)
  } catch (error) {
    return NextResponse.json({ error: "Could not add trip." }, { status: 500 })
  }
}
