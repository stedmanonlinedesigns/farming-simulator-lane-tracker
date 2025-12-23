import { Main, PageHeading, PageActions } from "../components"
import { AddFieldForm } from "./components"

export default function AddFieldPage() {
  return (
    <Main>
      <PageActions />
      <PageHeading title="Add field" />
      <AddFieldForm />
    </Main>
  )
}
