import { SetStateAction } from 'react'
import { InputEnum } from '../Dashboard/constants'
import { ToDoTypes } from '../Dashboard/types'

export interface TodoItemProps {
  item: ToDoTypes
  editingNameId: string | undefined
  editingDescId: string | undefined
  setEditingNameId: React.Dispatch<React.SetStateAction<string | undefined>>
  setEditingDescId: React.Dispatch<React.SetStateAction<string | undefined>>
  resetIsEditing: () => void
}

export interface ItemDescriptionProps {
  editingDescId: string | undefined
  item: ToDoTypes
  todo: ToDoTypes
  editTodoName: (value: string, todoId: string, stringName: InputEnum) => void
  setTodo: React.Dispatch<SetStateAction<ToDoTypes>>
  setEditingDescId: React.Dispatch<SetStateAction<string | undefined>>
}

export interface ItemStatusProps {
  setTodoStatus: (isFinished: boolean, todoId: string) => void
  item: ToDoTypes
}

export interface ItemTimeProps {
  item: ToDoTypes
}

export interface ItemTitleProps {
  editingNameId: string | undefined
  item: ToDoTypes
  todo: ToDoTypes
  editTodoName: (value: string, todoId: string, stringName: InputEnum) => void
  setTodo: React.Dispatch<SetStateAction<ToDoTypes>>
  setEditingNameId: React.Dispatch<SetStateAction<string | undefined>>
}

export type DeleteItemButtonTypes = {
  item: ToDoTypes
}
