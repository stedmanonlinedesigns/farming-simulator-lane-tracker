import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await getDatabase()
    const fieldsCollection = db.collection("fields")
    let fieldsData = await fieldsCollection.find().toArray()

    return NextResponse.json({ fieldsData })
  } catch (error) {
    console.error("Failed to fetch all fields.", error)

    return NextResponse.json(
      { error: "Failed to fetch all fields." },
      { status: 500 }
    )
  }
}
