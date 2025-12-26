import React from "react"
import Link from "next/link"
import { Box, Typography } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

type PagesActionsLinkProps = {
  children: React.ReactNode
  href: string
  trailingIcon?: boolean
}

const PagesActionsLink = ({
  href,
  children,
  trailingIcon = false,
}: PagesActionsLinkProps) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Box
        display={{ xs: "flex" }}
        alignItems={{ xs: "center" }}
        justifyContent={{ xs: "center" }}
        gap={{ xs: 1 }}
      >
        <Box order={!trailingIcon ? 1 : 2}>
          {!trailingIcon ? (
            <ArrowBackIcon fontSize="medium" sx={{ color: "#F9DD30" }} />
          ) : (
            <ArrowForwardIcon fontSize="medium" sx={{ color: "#F9DD30" }} />
          )}
        </Box>
        <Box order={!trailingIcon ? 2 : 1}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#F9DD30",
              textTransform: "capitalize",

              // textDecoration: pathname === path ? "underline" : "none",
              textUnderlineOffset: "4px",
              textDecorationThickness: "2px",

              "&:hover": {
                textDecoration: "underline",
                textDecorationThickness: "3px",
              },
            }}
          >
            {children}
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}

export default PagesActionsLink
