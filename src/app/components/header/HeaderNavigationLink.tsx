"use client"
import React from "react"
import { useRouter } from "next/navigation"
import Button from "@mui/material/Button"

type HeaderNavigationLinkProps = {
  path: string
  children: React.ReactNode
}

const HeaderNavigationLink = ({
  path,
  children,
}: HeaderNavigationLinkProps) => {
  const router = useRouter()

  const handleNavigateButtonClick = (pathTo: string) => {
    router.push(pathTo)
  }

  return (
    <Button
      variant="text"
      onClick={() => handleNavigateButtonClick(path)}
      size="small"
      sx={{
        fontWeight: "bold",
        color: "#F9DD30",
        "&:hover": {
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          textDecorationThickness: "3px",
        },
      }}
    >
      {children}
    </Button>
  )
}

export default HeaderNavigationLink
