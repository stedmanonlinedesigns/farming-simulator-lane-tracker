import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Section } from "../../components"

type PageHeadingProps = {
  title: string
  subtitle?: string
}

const PageHeading = ({ title, subtitle }: PageHeadingProps) => {
  return (
    <Section sx={{}}>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h1"
          fontSize={{ xs: "40px", sm: "48px", md: "56px", lg: "64px" }}
          fontWeight={"bold"}
          sx={{ width: "100%", color: "#F9DD30" }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            fontSize={{ xs: "24px", sm: "76px", md: "84px", lg: "96px" }}
            sx={{ width: "100%", color: "white", textTransform: "capitalize" }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Section>
  )
}

export default PageHeading
