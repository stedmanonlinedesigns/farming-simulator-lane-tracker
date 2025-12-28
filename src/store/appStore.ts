import { create } from "zustand"

export type View = "fields" | "trips"

export type EditFieldModalUpdate = "fieldNumber" | "status" | "seed"

type AppState = {
  selectedView: View | null
  setSelectedView: (selectedView: View) => void
  // inputValue: string | number
  // setInputValue: (value: string| number) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedView: "fields",
  setSelectedView: (selectedView) => {
    set({ selectedView: selectedView })
  },
  // inputValue: '',
  // setInputValue: (value) => {
  //   set({ inputValue: value })
  // },
}))
