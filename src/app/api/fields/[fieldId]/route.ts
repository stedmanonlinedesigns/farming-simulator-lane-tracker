import { NextResponse } from "next/server"
// import dayjs from "dayjs"
import { getDatabase } from "@/lib/mongodb"
import type {
  Field,
  CropStatus,
  CropSeed,
} from "@/app/api/fields/allFields/route"

export async function PATCH(
  request: Request,
  { params }: { params: { field_id: string } }
) {
  try {
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
      newFieldObj["crop_details"].status = status
    }

    if (seed !== undefined) {
      newFieldObj["crop_details"].seed = seed
    }

    const result = await fieldsCollection.findOneAndUpdate(
      { field_id: params.field_id },
      { $set: newFieldObj },
      { returnDocument: "after" }
    )

    if (!result) {
      return NextResponse.json({ error: "Field not found" }, { status: 404 })
    }

    console.log(222, newFieldObj)

    return NextResponse.json({ fieldData: result })
  } catch (error) {
    console.error("Failed to updated field.", error)
    return NextResponse.json(
      { error: "Failed to update field." },
      { status: 500 }
    )
  }
}
