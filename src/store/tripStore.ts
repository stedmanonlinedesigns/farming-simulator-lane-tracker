import { create } from "zustand"
import type { Trip } from "@/app/api/trips/route"

type TripsState = {
  allTrips: Trip[]
  loading: boolean
  updating: boolean
  fetchAllTrips: () => Promise<void>
  addTrip: (
    trip_number: Trip["trip_number"],
    field_id: Trip["field_id"],
    trip_time: Trip["trip_time"]
  ) => Promise<void>
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
  addTrip: async (trip_number, field_id, trip_time) => {
    set({ updating: true })
    try {
      const response = await fetch(`/api/trips`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          trip_number,
          field_id,
          trip_time,
        }),
      })

      const data = await response.json()

      set({ allTrips: data.tripsData })
    } catch (error) {
      console.error("Failed to add trip.", error)
    } finally {
      set({ updating: false })
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
