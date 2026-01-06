'use client'
import { useCurrentFieldStore } from "@/store/currentFieldStore"
import { Box } from "@mui/material"
import DetailsMetricsItem from "./DetailsMetricsItem"

const DetailsMetrics = () => {
  const { currentField } = useCurrentFieldStore()

  if (!currentField) {
    return (
      <div><p>Loading...</p></div>
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
        label={"Till tramline"}
        displayValue={3}
        // field={field}
      />
      <DetailsMetricsItem
        label={"Tramline"}
        displayValue={"Off"}
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
