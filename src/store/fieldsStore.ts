import { create } from "zustand"
import { Field } from "@/app/api/fields/allFields/route"

type FieldsState = {
  allFields: Field[]
  loading: boolean
  updating: boolean
  fetchAllFields: () => Promise<void>
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
}))
