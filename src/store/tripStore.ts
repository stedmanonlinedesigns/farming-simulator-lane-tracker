import { create } from "zustand"
import type { Trip } from "@/app/api/trips/route"

type TripsState = {
  allTrips: Trip[]
  loading: boolean
  updating: boolean
  fetchAllTrips: () => Promise<void>
}

export const useTripStore = create<TripsState>((set) => ({
  allTrips: [],
  loading: true,
  updating: false,

  fetchAllTrips: async () => {
    try {
      const response = await fetch("/api/trips")
      const data = await response.json()

      set({ allTrips: data.tripsData })
    } catch (error) {
      console.error("Error fetching trips:", error)
    } finally {
      set({ loading: false })
    }
  },
  // incrementTrip: async () => {
  //   set({ updating: true })
  //   try {
  //     const response = await fetch("/api/trips", { method: "POST" })
  //     const data = await response.json()

  //     set({ currentTrip: data.currentTrip, totalTrips: data.totalTrips })
  //   } catch (error) {
  //     console.error("Error updating trip:", error)
  //   } finally {
  //     set({ updating: false })
  //   }
  // },
}))
