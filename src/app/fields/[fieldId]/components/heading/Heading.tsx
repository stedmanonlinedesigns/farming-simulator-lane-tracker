import HeadingTitle from "./HeadingTitle"
import HeadingCropDetails from "./HeadingCropDetails"
import type { Field } from "@/app/api/fields/route"

type PageHeadingProps = {
  field: Field
}

const PageHeading = ({ field }: PageHeadingProps) => {
  return (
    <section
      style={{
        boxSizing: "border-box",
        padding: "20px 20px 32px 20px",
        width: "100%",
        background: "#1E6F41",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <HeadingTitle>{`Field ${field.field_number}`}</HeadingTitle>
      <HeadingCropDetails field={field} />
    </section>
  )
}

export default PageHeading
