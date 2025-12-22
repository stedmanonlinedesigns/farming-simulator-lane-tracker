import { Box } from "@mui/material"
import HeaderNavigation from "./HeaderNavigation"

const Header = () => {
  return (
    <Box
      role="header"
      px={{ xs: "8px" }}
      py={2}
      sx={{ boxSizing: "border-box", background: "#16502F" }}
    >
      <HeaderNavigation />
    </Box>
  )
}

export default Header
