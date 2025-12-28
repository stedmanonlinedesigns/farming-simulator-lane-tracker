"use client"
import { useEditFieldModal } from "../modal/ModalContext"
import { Box, Typography, IconButton } from "@mui/material"
import { Section, Button } from "@/app/components"
import { EditFieldModal } from "../../components"
// import EditIcon from "@mui/icons-material/Edit"
import type { Field } from "@/app/api/fields/allFields/route"
import type { EditFieldType } from "../modal/ModalContext"

type PageHeadingProps = {
  field: Field
}

const PageHeading = ({ field }: PageHeadingProps) => {
  const { updateEditFieldType, openModal } = useEditFieldModal()

  const handleEditButtonClick = (editFieldType: EditFieldType) => {
    updateEditFieldType(editFieldType)
    openModal()
  }

  return (
    <Section sx={{}}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
        sx={{ width: "100%" }}
      >
        <Box sx={{ width: "100%" }}>
          <Box>
            <Typography
              variant="h1"
              fontSize={{ xs: "40px", sm: "48px", md: "56px", lg: "64px" }}
              fontWeight={"bold"}
              sx={{ width: "100%", color: "#F9DD30" }}
            >
              {`Field ${field.field_number}`}
            </Typography>
          </Box>
          <Box display={"flex"}>
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
                  {`${field.crop_details.status}`}{" "}
                  {/* <EditIcon
                  sx={{ width: "20px", height: "20px", color: "#F9DD30" }}
                /> */}
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
                {`${field.crop_details.seed}`}{" "}
                {/* <EditIcon
                  sx={{ width: "20px", height: "20px", color: "#F9DD30" }}
                /> */}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <EditFieldModal field={field} />
    </Section>
  )
}

export default PageHeading
