import { create } from "zustand"

export type View = "fields" | "trips"

type AppState = {
  selectedView: View | null
  setSelectedView: (selectedView: View) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedView: "fields",
  setSelectedView: (selectedView) => {
    set({ selectedView: selectedView })
  },
}))
