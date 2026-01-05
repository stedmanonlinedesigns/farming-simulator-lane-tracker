// import React from "react"
import Link from "next/link"
import { Avatar, Typography, Box } from "@mui/material"
// import IconButton from "@mui/material/IconButton"
import { Card } from "@/app/components"
// import MoreVertIcon from "@mui/icons-material/MoreVert"
import { Field } from "@/app/api/fields/route"

type FieldsDisplayCard = {
  field: Field
}

const FieldsDisplayCard = ({ field, ...otherProps }: FieldsDisplayCard) => {
  return (
    <Link
      href={`/fields/${field.field_id}`}
      passHref
      style={{ textDecoration: "none" }}
    >
      <Card {...otherProps}>
        <Box
          py={{ xs: 2 }}
          px={{ xs: 2 }}
          display={{ xs: "flex" }}
          justifyContent={{ xs: "center" }}
          alignItems={{ xs: "center" }}
          gap={{ xs: 2 }}
        >
          <Box>
            <Avatar
              aria-label="field-number"
              sx={{
                bgcolor:
                  field.crop_details.status === "planting"
                    ? "#ff3d00"
                    : field.crop_details.status === "planted"
                    ? "#103C23"
                    : "lightgray",
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                {field.field_number}
              </Typography>
            </Avatar>
          </Box>
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              fontSize={{ xs: "20px" }}
              fontWeight={"bold"}
              sx={{ color: "#ffffff" }}
            >{`Field ${field.field_number}`}</Typography>
            <Typography
              fontSize={{ xs: "18px" }}
              sx={{ color: "white", textTransform: "capitalize" }}
            >{`${
              !field.crop_details.status
                ? "Set status"
                : field.crop_details.status
            } | ${
              !field.crop_details.seed ? "Set crop" : field.crop_details.seed
            }`}</Typography>
          </Box>
          {/* <Box>
            <IconButton aria-label="field-actions">
              <MoreVertIcon sx={{ color: "white" }} />
            </IconButton>
          </Box> */}
        </Box>
      </Card>
    </Link>
  )
}

export default FieldsDisplayCard
