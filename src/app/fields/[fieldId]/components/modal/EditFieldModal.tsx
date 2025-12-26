"use client"
import React from "react"
import { useAppStore } from "@/store/appStore"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material"
import type { DialogProps, DialogTitleProps } from "@mui/material"

type EditFieldModalProps = Omit<DialogProps, "open"> & {
  titleProps: DialogTitleProps
}

const EditFieldModal = ({ onClose, titleProps }: EditFieldModalProps) => {
  const { editFieldModalStatus, toggleFieldModalStatus } = useAppStore()

  return (
    <Dialog
      open={editFieldModalStatus === "closed" ? false : true}
      onClose={onClose}
    >
      <DialogTitle {...titleProps} />
      <DialogContent dividers>
        <Typography>Here is some content</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained">Update</Button>
        <Button
          variant="outlined"
          onClick={() => toggleFieldModalStatus(editFieldModalStatus)}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditFieldModal
