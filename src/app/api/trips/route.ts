import { NextResponse } from "next/server"
import dayjs from "dayjs"
import { v4 as uuid } from "uuid"
import { getDatabase } from "@/lib/mongodb"
import { getAllTrips } from "@/lib/tripsData"

export type Trip = {
  trip_id: string
  trip_number: number
  field_id: string
  trip_time: {
    started: Date | null
    ended: Date | null
  }
  duration_minutes: number | null
  is_tramline_trip: boolean
  trips_until_tramline: number
  updated_at: Date
}

export async function GET() {
  try {
    const allTrips = await getAllTrips()

    return NextResponse.json(allTrips)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch trips." },
      { status: 500 }
    )
  }
}

// export async function GET() {
//   try {
//     const db = await getDatabase()
//     const tripsCollection = db.collection(
//       `${process.env.MONGODB_DATABASE_COLLECTION_ONE}`
//     )
//     const performanceStart = performance.now()
//     let tripsData = await tripsCollection.find({}).toArray()

//     // For development
//     // if (tripsData.length === 0) {
//     //   const newTrip: Trip = {
//     //     trip_id: uuid(),
//     //     trip_number: 0,
//     //     field_id: "111",
//     //     trip_time: {
//     //       started: null,
//     //       ended: null,
//     //     },
//     //   }

//     //   await tripsCollection.insertOne(newTrip)
//     // }

//     const performanceDuration = Math.round(performance.now() - performanceStart)

//     console.info({
//       log: `Fetched ${tripsData.length} trips.`,
//       timestamp: dayjs().format("ddd MM/DD/YYYY - HH:mm:ss:SSS"),
//       performance: `${performanceDuration.toString()}ms`,
//     })

//     return NextResponse.json({ tripsData })
//   } catch (error) {
//     console.error("Error fetching trips:", error)
//     return NextResponse.json(
//       { error: "Failed to fetch trips" },
//       { status: 500 }
//     )
//   }
// }

export async function POST(request: Request) {
  // try {
  //   const performanceStart = performance.now()
  //   const db = await getDatabase()
  //   const tripsCollection = db.collection(
  //     `${process.env.MONGODB_DATABASE_COLLECTION_ONE}`
  //   )
  //   const body = await request.json()
  //   const newBody = await body
  //   const { trip_number, field_id, trip_time } = newBody
  //   const newTrip: Trip = {
  //     trip_id: uuid(),
  //     trip_number: trip_number,
  //     field_id: field_id,
  //     trip_time: trip_time,
  //   }
  //   await tripsCollection.insertOne(newTrip)
  //   const tripsData = await tripsCollection.find({}).toArray()
  //   const performanceDuration = Math.round(performance.now() - performanceStart)
  //   console.info({
  //     log: `Trip ${newTrip.trip_number} was added for Field ${newTrip.field_id}`,
  //     timestamp: dayjs().format("ddd MM/DD/YYYY - HH:mm:ss:SSS"),
  //     performance: `${performanceDuration.toString()}ms`,
  //   })
  //   return NextResponse.json({ tripsData }, { status: 200 })
  // } catch (error) {
  //   console.error("Error fetching trips:", error)
  //   return NextResponse.json(
  //     { error: "Failed to fetch trips" },
  //     { status: 500 }
  //   )
  // }
}
