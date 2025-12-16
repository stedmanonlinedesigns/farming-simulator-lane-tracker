import { create } from 'zustand'

export const useTripStore = create((set) => ({
    currentTrip: 0,
    totalTrips: 0,
    loading: true,
    updating: false,

    fetchTrips: async () => {
        try {
          const response = await fetch('/api/trips')
          const data = await response.json()

          set({ currentTrip: data.currentTrip, totalTrips: data.totalTrips })
        } catch(error) {
          console.error('Error fetching trips:', error)
        } finally {
          set({ loading: false })
        }
    }
}))