import { create } from "zustand"

export type View = "fields" | "trips"
export type FieldModalStatus = "open" | "closed"

type AppState = {
  selectedView: View | null
  setSelectedView: (selectedView: View) => void
  editFieldModalStatus: FieldModalStatus
  toggleFieldModalStatus: (status: FieldModalStatus) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedView: "fields",
  setSelectedView: (selectedView) => {
    set({ selectedView: selectedView })
  },
  editFieldModalStatus: "closed",
  toggleFieldModalStatus: (status) => {
    status === "closed"
      ? set({ editFieldModalStatus: "open" })
      : set({ editFieldModalStatus: "closed" })
  },
}))
