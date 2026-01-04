"use client"
import { useFieldsStore } from "@/store/fieldsStore"
import { useEditFieldModal } from "./ModalContext"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"
import { Button } from "@/app/components"
import EditFieldModalForm from "./EditFieldModalForm"
import type { DialogProps } from "@mui/material"
import type { Field } from "@/app/api/fields/route"

type EditFieldModalProps = Omit<DialogProps, "open"> & {
  field: Field
  onFieldUpdated: any
}

const EditFieldModal = ({ field, onFieldUpdated }: EditFieldModalProps) => {
  const {
    open,
    editFieldType,
    updateEditFieldType,
    inputValue,
    resetInputValue,
    closeModal,
  } = useEditFieldModal()
  const { updateField } = useFieldsStore()
  const { status, seed } = onFieldUpdated

  const handleClose = () => {
    closeModal()
    setTimeout(() => {
      resetInputValue()
      updateEditFieldType("status")
    }, 500)
  }

  const handleSubmitForm = async () => {
    const updates: {
      field_number?: number
      status?: string
      seed?: string
    } = {}

    switch (editFieldType) {
      case "field_number":
        updates.field_number =
          typeof inputValue === "number" ? inputValue : parseInt(inputValue)
        break
      case "status":
        // @ts-expect-error Type 'string | number' is not assignable to type 'string | undefined'
        updates.status = inputValue
        break
      case "seed":
        // @ts-expect-error Type 'string | number' is not assignable to type 'string | undefined'
        updates.seed = inputValue
    }

    await updateField(field.field_id, updates)

    editFieldType === "status" && status(updates.status)
    editFieldType === "seed" && seed(updates.seed)

    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{`Field ${editFieldType}`}</DialogTitle>
      <DialogContent dividers>
        <EditFieldModalForm />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmitForm}
        >{`Update ${editFieldType}`}</Button>
        <Button variant="outlined" size="large" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditFieldModal
