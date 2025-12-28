"use client"
import { useAppStore } from "@/store/appStore"
import { Box, Typography, IconButton } from "@mui/material"
import { Section } from "@/app/components"
import { EditFieldModal } from "../../components"
import EditIcon from "@mui/icons-material/Edit"
import type { Field } from "@/app/api/fields/allFields/route"
import type { EditFieldModalUpdate } from "@/store/appStore"

type PageHeadingProps = {
  field: Field
}

const PageHeading = ({ field }: PageHeadingProps) => {
  const {
    isEditFieldModalOpen,
    toggleEditFieldModalOpen,
    editFieldModalUpdateType,
    toggleFieldModalType,

    // editFieldModalStatus,
    // toggleFieldModalStatus,
  } = useAppStore()

  const handleEditButtonClick = (updateType: EditFieldModalUpdate) => {
    toggleFieldModalType(updateType)
    toggleEditFieldModalOpen(isEditFieldModalOpen)
  }

  // console.log(222, editFieldModalUpdateType)

  return (
    <Section sx={{}}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
        sx={{ width: "100%" }}
      >
        <Box sx={{ width: "100%" }}>
          <Box display={"flex"} justifyContent={"space-between"} gap={2}>
            <Typography
              variant="h1"
              fontSize={{ xs: "40px", sm: "48px", md: "56px", lg: "64px" }}
              fontWeight={"bold"}
              sx={{ width: "100%", color: "#F9DD30" }}
            >
              {`Field ${field.field_number}`}
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={0.5}
            >
              <Typography
                fontSize={{ xs: "20px" }}
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                }}
              >
                {`${field.crop_details.status}`}
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleEditButtonClick("status")}
              >
                <EditIcon
                  sx={{ width: "20px", height: "20px", color: "#F9DD30" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={0.5}>
            <Typography
              fontSize={{ xs: "20px" }}
              sx={{
                color: "white",
                textTransform: "capitalize",
              }}
            >
              {`${field.crop_details.seed}`}
            </Typography>
            <IconButton
              size="small"
              onClick={() => handleEditButtonClick("seed")}
            >
              <EditIcon
                sx={{ width: "20px", height: "20px", color: "#F9DD30" }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <EditFieldModal
        field={field}
        // titleProps={{
        //   children: `Field ${field.field_number} ${editFieldModalStatus.edit}`,
        // }}
        // onClose={() => toggleFieldModalStatus({ open: false, edit: null })}
      />
    </Section>
  )
}

export default PageHeading
