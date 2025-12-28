"use client"
import { useAppStore } from "@/store/appStore"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material"
import { Button } from "@/app/components"
import EditFieldModalForm from "./EditFieldModalForm"
import type { DialogProps, DialogTitleProps } from "@mui/material"
import type { Field } from "@/app/api/fields/allFields/route"

type EditFieldModalProps = Omit<DialogProps, "open"> & {
  field: Field
}

const EditFieldModal = ({ field }: EditFieldModalProps) => {
  const {
    isEditFieldModalOpen,
    toggleEditFieldModalOpen,
    editFieldModalUpdateType,
    // toggleFieldModalType,

    // editFieldModalStatus,
    // toggleFieldModalStatus,
  } = useAppStore()

  console.log(555, editFieldModalUpdateType)

  return (
    <Dialog
      open={isEditFieldModalOpen}
      onClose={() => toggleEditFieldModalOpen(isEditFieldModalOpen)}
    >
      <DialogTitle>{`Update Field ${field.field_number}`}</DialogTitle>
      <DialogContent dividers>
        <EditFieldModalForm updateType={editFieldModalUpdateType} />
        {/* <Typography>Here is some content</Typography> */}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" size="large">{`Update`}</Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => toggleEditFieldModalOpen(isEditFieldModalOpen)}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditFieldModal
