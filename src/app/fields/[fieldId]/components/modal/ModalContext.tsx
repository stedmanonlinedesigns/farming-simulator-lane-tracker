"use client"
import React, { useContext } from "react"

export type EditFieldType = "field_number" | "status" | "seed"

type EditFieldModalContextValue = {
  open: boolean
  editFieldType: EditFieldType
  updateEditFieldType: (type: EditFieldType) => void
  inputValue: number | string
  updateInputValue: (value: number | string) => void
  resetInputValue: () => void
  openModal: () => void
  closeModal: () => void
}

const EditFieldModalContext =
  React.createContext<EditFieldModalContextValue | null>(null)

export const EditFieldModalProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [editFieldType, setEditFieldType] =
    React.useState<EditFieldType>("status")
  const [inputValue, setInputValue] = React.useState<number | string>("")

  return (
    <EditFieldModalContext.Provider
      value={{
        open: isOpen,
        editFieldType: editFieldType,
        updateEditFieldType: (type) => setEditFieldType(type),
        inputValue: inputValue,
        updateInputValue: (value) => {
          setInputValue(value)
        },
        resetInputValue: () => setInputValue(""),
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </EditFieldModalContext.Provider>
  )
}

export const useEditFieldModal = () => {
  const context = useContext(EditFieldModalContext)

  if (!context) {
    throw new Error(
      "useEditFieldModal must be used within a EditFieldModalProvider."
    )
  }

  return context
}
