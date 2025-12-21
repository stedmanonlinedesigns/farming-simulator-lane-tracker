import React from "react"
import { useAppStore } from "@/store/appStore"
import { Box } from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Typography from "@mui/material/Typography"
import type { View } from "@/store/appStore"

const appViews: View[] = ["fields", "trips"]

// type HeaderViewControlsProps = {}

const HeaderViewControls = () => {
  const { selectedView, setSelectedView } = useAppStore()

  return (
    <Box>
      <FormControl
        fullWidth
        size="small"
        sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <InputLabel id="select-label-selectView">Select a view</InputLabel>
        <Select
          labelId="select-label-selectView"
          id="select-view"
          value={selectedView}
          label="Select a view"
          // @ts-expect-error Argument of type 'string | null' is not assignable to parameter of type 'View'
          onChange={(event) => setSelectedView(event.target.value)}
        >
          {appViews.map((view, idx) => (
            <MenuItem key={idx} value={view}>
              <Typography sx={{ textTransform: "capitalize" }}>
                {view}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default HeaderViewControls
