import { create } from "zustand"
import type { Field, CropStatus, CropSeed } from "@/app/api/fields/route"

type FieldsState = {
  allFields: Field[]
  setAllFields: (fields: Field[]) => void
  setAllFieldsOnFieldUpdate: (updatedField: Field) => void
  loading: boolean
  updating: boolean
  fetchAllFields: () => Promise<void>
  addField: (
    fieldNumber: number,
    status: CropStatus,
    seed: CropSeed
  ) => Promise<void>
  updateField: (
    fieldId: string,
    updates: {
      field_number?: number
      status?: string
      seed?: string
    }
  ) => Promise<void>
}

export const useFieldsStore = create<FieldsState>((set) => ({
  allFields: [],
  loading: true,
  updating: false,
  setAllFields: (fields) => set({ allFields: fields }),
  setAllFieldsOnFieldUpdate: (updatedField) => {
    set((state) => ({
      allFields: state.allFields.map((field) =>
        field.field_id === updatedField.field_id ? updatedField : field
      ),
    }))
  },
  fetchAllFields: async () => {
    try {
      const response = await fetch("/api/fields")
      const data = await response.json()

      set({ allFields: data.fieldsData })
    } catch (error) {
      console.error("Error fetching all fields.", error)
    } finally {
      set({ loading: false })
    }
  },
  addField: async (fieldNumber, status, seed) => {
    if (typeof fieldNumber === "string") {
      throw new Error("addField() requires a number.")
    }

    try {
      set({ updating: true })
      const response = await fetch("/api/fields", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          field_number: fieldNumber,
          crop_details: {
            status: status,
            seed: seed,
          },
          trip_tracking: {
            total_trips: 0,
          },
        }),
      })
      const data = await response.json()

      set({ allFields: data.fieldsData })

      await fetch(`/api/fields?timestamp=${Date.now()}`, {
        cache: "no-store",
      })
    } catch (error) {
      console.error("Failed to add field to database.", error)
    } finally {
      set({ updating: false })
    }
  },
  updateField: async (fieldId, updates) => {
    set({ updating: true })
    try {
      const response = await fetch(`/api/fields/${fieldId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      })

      const data = await response.json()

      set((state) => ({
        allFields: state.allFields.map((field) =>
          field.field_id === fieldId ? data.fieldData : field
        ),
      }))
    } catch (error) {
      console.error("Error updating field:", error)
    } finally {
      set({ updating: false })
    }
  },
}))
