import Box from "@mui/material/Box"

type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <Box
      role="main"
      pb={{ xs: '20px' }}
      sx={{
        boxSizing: "border-box",
        width: "100%",
        background: "#1E6F41",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  )
}

export default Main
