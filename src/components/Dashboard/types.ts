export interface AddModalProps {
  isOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type ValueStringType = {
  name: string
  value: string | Date | null
  error: boolean
}

export type ToDoTypes = {
  id: string
  name: ValueStringType
  description: ValueStringType
  date: ValueStringType
  isFinished?: boolean
}
