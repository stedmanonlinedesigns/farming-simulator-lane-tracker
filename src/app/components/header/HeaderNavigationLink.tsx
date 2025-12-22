"use client"
import React from "react"
import { useRouter, usePathname } from "next/navigation"
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
  const pathname = usePathname()

  const handleNavigateButtonClick = (pathTo: string) => {
    router.push(pathTo)
  }

  return (
    <Button
      variant="text"
      onClick={() => handleNavigateButtonClick(path)}
      size="small"
      sx={{
        fontSize: "18px",
        fontWeight: "bold",
        color: "#F9DD30",
        textTransform: "capitalize",

        textDecoration: pathname === path ? "underline" : "none",
        textUnderlineOffset: "4px",
        textDecorationThickness: "2px",

        "&:hover": {
          textDecoration: "underline",
          textDecorationThickness: "3px",
        },
      }}
    >
      {children}
    </Button>
  )
}

export default HeaderNavigationLink
