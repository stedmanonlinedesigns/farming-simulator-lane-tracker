"use client"
import { usePathname } from "next/navigation"
import { Box } from "@mui/material"
import PagesActionsLink from "./PagesActionsLink"

const PageActions = () => {
  const pathname = usePathname()
  const shouldIncludeBackLink = pathname !== "/fields" && pathname !== "/trips"

  return (
    <Box
      boxSizing={"border-box"}
      py={{ xs: "12px" }}
      px={{ xs: "20px", md: "40px" }}
      width={{ xs: "100%" }}
      display={{ xs: "flex" }}
      justifyContent={{ xs: shouldIncludeBackLink ? "space-between" : "end" }}
      alignItems={{ xs: "center" }}
      sx={{ background: "#103C23" }}
    >
      {shouldIncludeBackLink && (
        <PagesActionsLink href={"/fields"}>Fields</PagesActionsLink>
      )}

      <PagesActionsLink href={"/add-field"} trailingIcon>
        Add field
      </PagesActionsLink>
    </Box>
  )
}

export default PageActions
