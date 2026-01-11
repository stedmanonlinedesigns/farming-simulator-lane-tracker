import { create } from "zustand"
import type { Field } from "@/app/api/fields/route"
import type { Trip } from "@/app/api/trips/route"

type CurrentFieldState = {
  currentField: Field | null
  setCurrentField: (currentField: Field) => void
  fieldTrips: Trip[]
  setCurrentFieldTrips: (trips: Trip[]) => void
}

export const useCurrentFieldStore = create<CurrentFieldState>((set) => ({
  currentField: null,
  setCurrentField: (currentField) => {
    set({ currentField: currentField })
  },
  fieldTrips: [],
  setCurrentFieldTrips: () => {
    set({ fieldTrips: [] })
  },
}))
