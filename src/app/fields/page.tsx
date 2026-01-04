import { getDatabase } from "@/lib/mongodb"
import { PageHeading, PageActions } from "../components"
import { FieldsDisplay, FieldsNoFieldsDisplay } from "./components"
import type { Field } from "../api/fields/route"

export default async function FieldsPage() {
  const db = await getDatabase()
  const fieldsCollection = db.collection(
    `${process.env.MONGODB_DATABASE_COLLECTION_FIELDS}`
  )
  const fieldsData = await fieldsCollection.find({}).toArray()

  if (fieldsData.length === 0) {
    return (
      <main
        style={{
          boxSizing: "border-box",
          width: "100%",
          background: "#1E6F41",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <FieldsNoFieldsDisplay />
      </main>
    )
  }

  const resolvedFieldsData: Field[] = fieldsData.map((field) => ({
    field_id: field.field_id,
    field_number: field.field_number,
    crop_details: field.crop_details,
    trip_tracking: field.trip_tracking,
    updated_at: field.updated_at,
  }))

  return (
    <main
      style={{
        boxSizing: "border-box",
        width: "100%",
        background: "#1E6F41",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <PageActions />
      <PageHeading title="Fields" subtitle="Select a field to view." />
      <FieldsDisplay fields={resolvedFieldsData} />
    </main>
  )
}
