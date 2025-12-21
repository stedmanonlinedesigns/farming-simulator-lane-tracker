import { Box } from "@mui/material"
import HeaderNavigation from "./HeaderNavigation"

const Header = () => {
  return (
    <Box role="header" sx={{ py: 4, background: "#1E6F41" }}>
      <HeaderNavigation />
    </Box>
  )
}

export default Header
