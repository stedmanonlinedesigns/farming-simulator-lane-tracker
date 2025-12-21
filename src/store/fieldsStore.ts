import { create } from "zustand"
import { Field } from "@/app/api/fields/allFields/route"

// TODO: Add update field and delete field

type FieldsState = {
  allFields: Field[]
  currentField: Field | null
  loading: boolean
  updating: boolean
  fetchAllFields: () => Promise<void>
  addField: (
    fieldNumber: number,
    status: string | null,
    seed: string | null
  ) => Promise<void>
  setCurrentField: (currentField: Field) => void
}

export const useFieldsStore = create<FieldsState>((set) => ({
  allFields: [],
  currentField: null,
  loading: true,
  updating: false,
  fetchAllFields: async () => {
    try {
      const response = await fetch("/api/fields/allFields")
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
      const response = await fetch("/api/fields/allFields", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          field_number: fieldNumber,
          field_status: status,
          field_seed: seed,
        }),
      })
      const data = await response.json()

      set({ allFields: data.fieldsData })
    } catch (error) {
      console.error("Failed to add field to database.", error)
    } finally {
      set({ updating: false })
    }
  },
  setCurrentField: (currentField) => {
    set({ currentField: currentField })
  },
}))
