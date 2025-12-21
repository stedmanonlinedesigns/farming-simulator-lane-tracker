// 'use client'
import { create } from "zustand"

interface TripState {
  currentTrip: number
  totalTrips: number
  loading: boolean
  updating: boolean
  fetchTrips: () => Promise<void>
}

export const useTripStore = create<TripState>((set) => ({
  currentTrip: 0,
  totalTrips: 0,
  loading: true,
  updating: false,

  fetchTrips: async () => {
    try {
      const response = await fetch("/api/allTrips")
      const data = await response.json()

      set({ currentTrip: data.currentTrip, totalTrips: data.totalTrips })
    } catch (error) {
      console.error("Error fetching trips:", error)
    } finally {
      set({ loading: false })
    }
  },
}))
