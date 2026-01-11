import dayjs from "dayjs"
import { v4 as uuid } from "uuid"
import { unstable_noStore as noStore } from "next/cache"
import { getDatabase } from "./mongodb"
import type { Field } from "@/app/api/fields/route"
import type { Trip } from "@/app/api/trips/route"

export async function getAllTrips() {
  noStore()
  const db = await getDatabase()
  const tripsCollection = db.collection(`${process.env.MONGODB_DATABASE_COLLECTION_TRIPS}`)
  const tripsData = await tripsCollection.find({}).toArray()

  if (!tripsData) {
    return 'Could not find any trips in database.'
  }

  const resolvedTripsData: Trip[] = tripsData.map(trip => ({
    trip_id: trip.trip_id,
    trip_number: trip.trip_number,
    field_id: trip.field_number,
    trip_time: {
      started: trip.trip_time.started,
      ended: trip.trip_time.ended
    },
    duration_minutes: trip.duration_minutes,
    is_tramline_trip: trip.is_tramline_trip,
    trips_until_tramline: trip.trips_until_tramline,
    updated_at: trip.updated_at
  }))

  return resolvedTripsData
}

export async function getTripsByFieldId(fieldId: Field['field_id']) {
  noStore()
  const resolvedFieldId = await fieldId
  const db = await getDatabase()
  const tripsCollection = db.collection(`${process.env.MONGODB_DATABASE_COLLECTION_TRIPS}`)
  const tripsByFieldId = await tripsCollection.find({ field_id: resolvedFieldId }).toArray()

  console.log(555, tripsByFieldId)

  return tripsByFieldId
}

export async function addTrip(request: Request): Promise<string> {
  noStore()
  const db = await getDatabase()
  const tripsCollection = db.collection(
    `${process.env.MONGODB_DATABASE_COLLECTION_TRIPS}`
  )

  const body = await request.json()
  const {
    trip_number,
    field_id,
    trip_time,
    duration_minutes,
    is_tramline_trip,
    trips_until_tramline,
    updated_at,
  } = await body

  const newTrip: Trip = {
    trip_id: uuid(),
    trip_number: trip_number,
    field_id: field_id,
    trip_time: {
      started: trip_time.started,
      ended: null,
    },
    duration_minutes: duration_minutes,
    is_tramline_trip: is_tramline_trip,
    trips_until_tramline: trips_until_tramline,
    updated_at: updated_at,
  }

  await tripsCollection.insertOne(newTrip)

  return `Trip ${trip_number} was added to the trips database.`
}
