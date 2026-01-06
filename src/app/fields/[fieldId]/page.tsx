import { getFieldById } from "@/lib/data"
import { Main, PageActions } from "@/app/components"
import { Heading, Details } from "./components"

type FieldPageProps = {
  params: {
    fieldId: string
  }
}

const FieldPage = async ({ params }: FieldPageProps) => {
  const resolvedParams = await params
  const currentField = await getFieldById(resolvedParams.fieldId)

  if (!currentField) {
    return <div>Field not found</div>
  }

  return (
    <Main>
      <PageActions />
      <Heading field={currentField} />
      <Details field={currentField} />
      {/* <DisplaySection field={resolvedFieldData} /> */}
    </Main>
  )
}

export default FieldPage
