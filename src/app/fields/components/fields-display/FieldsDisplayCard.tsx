// "use client"
// import React from "react"
import { Avatar, Typography, Box } from "@mui/material"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
// import { styled } from "@mui/material/styles"
import { Card } from "@/app/components"
import MoreVertIcon from "@mui/icons-material/MoreVert"
// import FavoriteIcon from "@mui/icons-material/Favorite"
// import ShareIcon from "@mui/icons-material/Share"
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props
//   return <IconButton {...other} />
// })(({ theme }) => ({
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: "rotate(0deg)",
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: "rotate(180deg)",
//       },
//     },
//   ],
// }))

type FieldsDisplayCard = {
  field: any
}

const FieldsDisplayCard = ({ field }: FieldsDisplayCard) => {
  // const [expanded, setExpanded] = React.useState(false)

  // const handleExpandClick = () => {
  //   setExpanded(!expanded)
  // }

  return (
    <Card>
      <Box
        py={{ xs: 2 }}
        px={{ xs: 2 }}
        display={{ xs: "flex" }}
        gap={{ xs: 2 }}
      >
        <Box>
          <Avatar
            aria-label="field-number"
            sx={{
              bgcolor:
                field.crop_details.status === "planting"
                  ? "purple"
                  : field.crop_details.status === "planted"
                  ? "red"
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
          >{`${field.crop_details.status} | ${field.crop_details.seed}`}</Typography>
        </Box>
        <Box>
          <IconButton aria-label="field-actions">
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      {/* <Card.Actions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{ color: "white" }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: "white" }} />
        </ExpandMore>
      </Card.Actions> */}
    </Card>
  )
}

export default FieldsDisplayCard
