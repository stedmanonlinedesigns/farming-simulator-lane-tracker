import { Main, PageHeading, PageActions } from "../components"
import { FieldsDisplay } from "./components"

export default function FieldsPage() {
  return (
    <Main>
      <PageActions />
      <PageHeading title="Fields" />
      <FieldsDisplay />
    </Main>
  )
}
