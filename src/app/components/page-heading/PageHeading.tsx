import Box from "@mui/material/Box"
import { Typography, Button } from "@mui/material"
import { Section } from "../../components"

type PageHeadingProps = {
  title: string
  subtitle?: string
  action?: () => void
}

const PageHeading = ({ title, subtitle, action }: PageHeadingProps) => {
  return (
    <Section sx={{}}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"start"}
        sx={{ width: "100%" }}
      >
        <Box sx={{}}>
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
              fontSize={{ xs: "24px" }}
              sx={{
                width: "100%",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        {action && (
          <Box>
            <Button
              variant="contained"
              disableElevation
              size="small"
              onClick={action}
              sx={{ background: "#F9DD30", color: "#103C23", fontWeight: 700 }}
            >
              Edit field
            </Button>
          </Box>
        )}
      </Box>
    </Section>
  )
}

export default PageHeading
