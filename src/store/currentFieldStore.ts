import { create } from "zustand"
import type { Field } from "@/app/api/fields/route"

type CurrentFieldState = {
  currentField: Field | null
  setCurrentField: (currentField: Field) => void
}

export const useCurrentFieldStore = create<CurrentFieldState>((set) => ({
  currentField: null,
  setCurrentField: (currentField) => {
    set({ currentField: currentField })
  },
}))
