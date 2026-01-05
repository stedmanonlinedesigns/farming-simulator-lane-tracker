import { Section } from "@/app/components"
import HeadingTitle from "./HeadingTitle"
import HeadingCropDetails from "./HeadingCropDetails"
import type { Field } from "@/app/api/fields/route"

type PageHeadingProps = {
  field: Field
}

const PageHeading = ({ field }: PageHeadingProps) => {
  return (
    <Section>
      <HeadingTitle>{`Field ${field.field_number}`}</HeadingTitle>
      <HeadingCropDetails field={field} />
    </Section>
  )
}

export default PageHeading
