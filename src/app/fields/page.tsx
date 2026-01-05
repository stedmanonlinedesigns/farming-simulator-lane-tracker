import { Main, PageHeading, PageActions } from "../components"
import { FieldsDisplay } from "./components"

export default function FieldsPage() {
  return (
    <Main>
      <PageActions />
      <PageHeading title="Fields" subtitle="Select a field to view" />
      <FieldsDisplay />
    </Main>
  )
}
