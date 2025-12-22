import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"

type AppCardProps = {
  children: React.ReactNode
}

const AppCard = ({ children }: AppCardProps) => {
  return <Card sx={{ width: "100%", background: "#268D52" }}>{children}</Card>
}

AppCard.Header = CardHeader
AppCard.Content = CardContent
AppCard.Actions = CardActions

export default AppCard
