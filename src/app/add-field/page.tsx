import { PageHeading, PageActions } from "../components"
import { AddFieldForm } from "./components"

export default function AddFieldPage() {
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
      <PageHeading title="Add field" subtitle="Create new field to seed" />
      <AddFieldForm />
    </main>
  )
}
