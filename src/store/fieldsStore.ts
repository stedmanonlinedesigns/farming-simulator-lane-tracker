import { create } from "zustand"
import { Field } from "@/app/api/fields/allFields/route"

// TODO: Add update field and delete field

type FieldsState = {
  allFields: Field[]
  loading: boolean
  updating: boolean
  fetchAllFields: () => Promise<void>
  addField: () => Promise<void>
}

export const useFieldsStore = create<FieldsState>((set) => ({
  allFields: [],
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
  addField: async () => {
    try {
      set({ updating: true })
      const response = await fetch("/api/fields/allFields", { method: "POST" })
      const data = await response.json()

      set({ allFields: data.fieldsData })
    } catch (error) {
      console.error("Failed to add field to database.", error)
    } finally {
      set({ updating: false })
    }
  },
}))
