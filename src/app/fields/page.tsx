import { Main, PageHeading, PageActions } from "../components"
import { FieldsDisplay } from "./components"

export default function Fields() {
  return (
    <Main>
      <PageActions />
      <PageHeading title="Fields" />
      <FieldsDisplay />
    </Main>
  )
}
