import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Section } from "../../components"

type PageHeadingProps = {
  title: string
}

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <Section sx={{ }}>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h1"
          fontSize={{ xs: "56px", sm: "76px", md: "84px", lg: "96px" }}
          fontWeight={"bold"}
          sx={{ width: "100%", color: "#F9DD30" }}
        >
          {title}
        </Typography>
      </Box>
    </Section>
  )
}

export default PageHeading
