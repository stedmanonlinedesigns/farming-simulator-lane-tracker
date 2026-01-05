"use client"
import React from "react"
import { useEditFieldModal } from "../modal/ModalContext"
import { Box, Typography } from "@mui/material"
import { Button } from "@/app/components"
import { EditFieldModal } from "../modal"
import type { Field } from "@/app/api/fields/route"
import type { EditFieldType } from "../modal/ModalContext"

type HeadingCropDetailsProps = {
  field: Field
}

// TODO: Could just pass the crop details object here
const HeadingCropDetails = ({ field }: HeadingCropDetailsProps) => {
  const { updateEditFieldType, openModal } = useEditFieldModal()
  const [localCropStatus, setLocalCropStatus] = React.useState<
    Field["crop_details"]["status"]
  >(field.crop_details.status)
  const [localCropSeed, setLocalCropSeed] = React.useState<
    Field["crop_details"]["seed"]
  >(field.crop_details.seed)

  const handleEditButtonClick = (editFieldType: EditFieldType) => {
    updateEditFieldType(editFieldType)
    openModal()
  }

  const updateCropDetails = {
    status: setLocalCropStatus,
    seed: setLocalCropSeed,
  }

  return (
    <Box display={"flex"} sx={{ width: "100%" }}>
      <Box
        sx={{
          minWidth: "160px",
          maxWidth: "160px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={"4px"}
        >
          <Typography
            fontSize={{ xs: "20px" }}
            sx={{
              color: "white",
              textTransform: "capitalize",
            }}
          >
            Status:
          </Typography>
          <Button
            size={"small"}
            variant="text"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "18px",
              color: "#F9DD30",
              textTransform: "capitalize",
            }}
            onClick={() => handleEditButtonClick("status")}
          >
            {`${localCropStatus}`}
          </Button>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"4px"}
      >
        <Typography
          fontSize={{ xs: "20px" }}
          sx={{
            color: "white",
            textTransform: "capitalize",
          }}
        >
          Seed:
        </Typography>
        <Button
          size={"small"}
          variant="text"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "18px",
            color: "#F9DD30",
            textTransform: "capitalize",
          }}
          onClick={() => handleEditButtonClick("seed")}
        >
          {`${localCropSeed}`}
        </Button>
      </Box>

      <EditFieldModal field={field} onFieldUpdated={updateCropDetails} />
    </Box>
  )
}

export default HeadingCropDetails
