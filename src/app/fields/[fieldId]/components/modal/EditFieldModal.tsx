"use client"
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
import type { Field } from "@/app/api/fields/allFields/route"

type EditFieldModalProps = Omit<DialogProps, "open"> & {
  field: Field
}

const EditFieldModal = ({ field }: EditFieldModalProps) => {
  const {
    open,
    editFieldType,
    updateEditFieldType,
    inputValue,
    resetInputValue,
    closeModal,
  } = useEditFieldModal()

  console.log(555, inputValue)
  const handleClose = () => {
    closeModal()
    setTimeout(() => {
      resetInputValue()
      updateEditFieldType("status")
    }, 500)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{`Update Field ${field.field_number}`}</DialogTitle>
      <DialogContent dividers>
        <EditFieldModalForm />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" size="large">{`Update`}</Button>
        <Button variant="outlined" size="large" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditFieldModal
