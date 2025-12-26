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
import type { DialogProps, DialogTitleProps } from "@mui/material"

type EditFieldModalProps = Omit<DialogProps, "open"> & {
  titleProps: DialogTitleProps
}

const EditFieldModal = ({ onClose, titleProps }: EditFieldModalProps) => {
  const { editFieldModalStatus, toggleFieldModalStatus } = useAppStore()

  return (
    <Dialog open={!editFieldModalStatus.open ? false : true} onClose={onClose}>
      <DialogTitle {...titleProps} />
      <DialogContent dividers>
        <Typography>Here is some content</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          size="large"
        >{`Update ${editFieldModalStatus.edit}`}</Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => toggleFieldModalStatus({ open: false, edit: null })}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditFieldModal
