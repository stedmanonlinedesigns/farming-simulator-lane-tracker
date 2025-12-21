import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MoreVertIcon from "@mui/icons-material/MoreVert"

type AppCardProps = {
  children: React.ReactNode
}

const AppCard = ({ children }: AppCardProps) => {
  return (
    <Card sx={{ minWidth: "320px", maxWidth: "400px" }}>
      <CardHeader
        title="Field 33"
        subheader="Planted | Oats"
        avatar={
          <Avatar aria-label="field-number" sx={{ bgcolor: "dodgerblue" }}>
            <Typography variant="body1" fontWeight='bold'>133</Typography>
          </Avatar>
        }
        action={
          <IconButton aria-label="field-actions">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>{children}</CardContent>
      <CardActions></CardActions>
    </Card>
  )
}

export default AppCard
