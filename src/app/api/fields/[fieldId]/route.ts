import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ fieldId: string }> }
) {
  try {
    const { fieldId } = await params
    const db = await getDatabase()
    const fieldsCollection = db.collection(
      `${process.env.MONGODB_DATABASE_COLLECTION_TWO}`
    )

    const body = await request.json()
    const { field_number, status, seed } = body

    const newFieldObj: any = {}

    if (field_number !== undefined) {
      newFieldObj.field_number = field_number
    }

    if (status !== undefined) {
      newFieldObj["crop_details.status"] = status
    }

    if (seed !== undefined) {
      newFieldObj["crop_details.seed"] = seed
    }

    const result = await fieldsCollection.findOneAndUpdate(
      { field_id: fieldId },
      { $set: newFieldObj },
      { returnDocument: "after" }
    )

    if (!result) {
      return NextResponse.json({ error: "Field not found" }, { status: 404 })
    }

    return NextResponse.json({ fieldData: result })
  } catch (error) {
    console.error("Failed to updated field.", error)
    return NextResponse.json(
      { error: "Failed to update field." },
      { status: 500 }
    )
  }
}
