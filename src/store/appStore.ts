import { create } from "zustand"

export type View = "fields" | "trips"
// export type EditFieldModalStatus = {
//   open: boolean
//   edit: "number" | "status" | "seed" | null
// }

export type EditFieldModalUpdate = "fieldNumber" | "status" | "seed"

type AppState = {
  selectedView: View | null
  setSelectedView: (selectedView: View) => void
  // editFieldModalStatus: EditFieldModalStatus
  // toggleFieldModalStatus: (status: EditFieldModalStatus) => void
  inputValue: string | number
  setInputValue: (value: string| number) => void
  isEditFieldModalOpen: boolean
  toggleEditFieldModalOpen: (modalOpenStatus: boolean) => void
  // editFieldModalType: "textfield" | "picker"
  editFieldModalUpdateType: EditFieldModalUpdate
  toggleFieldModalType: (modalType: EditFieldModalUpdate) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedView: "fields",
  setSelectedView: (selectedView) => {
    set({ selectedView: selectedView })
  },
  // editFieldModalStatus: { open: false, edit: null },
  // toggleFieldModalStatus: (status) => {
  //   set({ editFieldModalStatus: { open: status.open, edit: status.edit } })
  // },
  inputValue: '',
  setInputValue: (value) => {
    set({ inputValue: value })
  },
  isEditFieldModalOpen: false,
  toggleEditFieldModalOpen: (modalOpenStatus) => {
    set({ isEditFieldModalOpen: !modalOpenStatus })
  },
  editFieldModalUpdateType: "status",
  toggleFieldModalType: (modalType) => {
    if (modalType === "status") {
      // return "picker"
      set({ editFieldModalUpdateType: "status" })
    } else if (modalType === "seed") {
      // return
      set({ editFieldModalUpdateType: "seed" })
    } else if (modalType === "fieldNumber") {
      set({ editFieldModalUpdateType: "fieldNumber" })
      // return "textfield"
    }
  },
}))
