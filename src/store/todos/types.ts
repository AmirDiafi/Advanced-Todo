import { InputEnum } from '../../components/Dashboard/constants'
import { ToDoTypes } from '../../components/Dashboard/types'

export const todoInitialValue: ToDoTypes[] = []

export type TodoActionsTypes = {
  addTodo: (todo: ToDoTypes) => void
  setTodoStatus: (isFinished: boolean, todoId: string) => void
  editTodoName: (value: string, todoId: string, stringName: InputEnum) => void
  deleteItem: (itemId: string) => void
}
export type TodoStoreTypes = { store: ToDoTypes[] } & TodoActionsTypes
