import { create } from "zustand"

export type View = "fields" | "trips"
export type EditFieldModalStatus = {
  open: boolean
  edit: "number" | "status" | "seed" | null
}

type AppState = {
  selectedView: View | null
  setSelectedView: (selectedView: View) => void
  editFieldModalStatus: EditFieldModalStatus
  toggleFieldModalStatus: (status: EditFieldModalStatus) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedView: "fields",
  setSelectedView: (selectedView) => {
    set({ selectedView: selectedView })
  },
  editFieldModalStatus: { open: false, edit: null },
  toggleFieldModalStatus: (status) => {
    set({ editFieldModalStatus: { open: status.open, edit: status.edit } })
  },
}))
