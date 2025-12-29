"use client"
import { useEffect } from "react"
import { useTripStore } from "@/store/tripStore"
import { useFieldsStore } from "@/store/fieldsStore"

export const useFetchAll = () => {
  const fetchAllTrips = useTripStore((s) => s.fetchAllTrips)
  const fetchAllFields = useFieldsStore((s) => s.fetchAllFields)

  useEffect(() => {
    fetchAllTrips()
    fetchAllFields()
  }, [fetchAllTrips, fetchAllFields])
}
