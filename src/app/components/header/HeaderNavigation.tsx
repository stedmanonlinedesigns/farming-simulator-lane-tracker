import { Box } from "@mui/material"
import HeaderNavigationLink from "./HeaderNavigationLink"
import { IconTractor } from "@tabler/icons-react"

const HeaderNavigation = () => {
  return (
    <Box
      sx={{
        px: "20px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <HeaderNavigationLink path="/">
          <IconTractor size={32} color="#F9DD30" />
        </HeaderNavigationLink>
        <HeaderNavigationLink path="/fields">Fields</HeaderNavigationLink>
        <HeaderNavigationLink path="/trips">Trips</HeaderNavigationLink>
      </Box>
    </Box>
  )
}

export default HeaderNavigation
