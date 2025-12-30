'use client'
import { useFetchAll } from "@/hooks/useFetchAll"
import { Main, PageHeading, PageActions } from "../components"
import { FieldsDisplay } from "./components"

export default function FieldsPage() {
  useFetchAll()
  
  return (
    <Main>
      <PageActions />
      <PageHeading title="Fields" />
      <FieldsDisplay />
    </Main>
  )
}
