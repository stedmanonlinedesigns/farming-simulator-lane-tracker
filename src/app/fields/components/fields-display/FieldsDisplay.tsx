import { CardDisplay } from "@/app/components"
import FieldsDisplayCard from "./FieldsDisplayCard"
import type { Field } from "@/app/api/fields/route"

type FieldsDisplayProps = {
  fields: Field[]
}

const FieldsDisplay = ({ fields }: FieldsDisplayProps) => {
  const sortedFields = fields.sort((a, b) => a.field_number - b.field_number)

  return (
    <CardDisplay>
      {sortedFields &&
        sortedFields.map((field) => (
          <FieldsDisplayCard key={field.field_id} field={field} />
        ))}
    </CardDisplay>
  )
}

export default FieldsDisplay
