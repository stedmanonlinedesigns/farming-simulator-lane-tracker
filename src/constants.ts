import type { CropSeed, CropStatus } from "./app/api/fields/allFields/route"

export const cropStatuses: CropStatus[] = ["fallow", "planted", "planting"]

export const cropSeeds: CropSeed[] = [
  "barley",
  "barley",
  "canola",
  "corn",
  "cotton",
  "fallow",
  "grass",
  "oats",
  "poplar",
  "soybeans",
  "sorghum",
  "sunflowers",
  "sugarcane",
  "wheat",
]

// export default {
//   cropStatuses,
//   cropSeeds,
// }
