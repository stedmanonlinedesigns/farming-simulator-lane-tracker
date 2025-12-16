'use client'
import React from 'react'
import { useTripStore } from '@/store/tripStore';

export default function Home() {
  const { currentTrip, totalTrips, fetchTrips, loading } = useTripStore()

  React.useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

  if (loading) {
    return (
      <div>
        <p style={{ fontWeight: 'semibold' }}>Loading...</p>
      </div>
    )
  }

  return (
      <main>
        <p style={{ fontWeight: 'bold', color: 'green' }}>Things loaded</p>
      </main>
  );
}
