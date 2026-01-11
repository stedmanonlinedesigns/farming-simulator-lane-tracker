"use client"
import { useCurrentFieldStore } from "@/store/currentFieldStore"
import { Box } from "@mui/material"
import { red } from "@mui/material/colors"
import DetailsMetricsItem from "./DetailsMetricsItem"

const DetailsMetrics = () => {
  const { currentField } = useCurrentFieldStore()
  const redColor = red[500]

  if (!currentField) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Box
      py={2}
      display={"flex"}
      justifyContent={"space-between"}
      sx={{ width: "100%" }}
    >
      <DetailsMetricsItem
        label={"Tramline"}
        displayValue={"Off"}
        displayValueSx={{ color: redColor }}
        // field={field}
      />
      <DetailsMetricsItem
        label={"Next"}
        displayValue={3}
        // field={field}
      />
      <DetailsMetricsItem
        label={"Interval"}
        displayValue={8}
        // field={field}
      />

      <DetailsMetricsItem
        label={"Total trips"}
        displayValue={currentField?.trip_tracking.total_trips}
        // field={field}
      />
    </Box>
  )
}

export default DetailsMetrics
