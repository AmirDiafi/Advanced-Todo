import create from 'zustand'
import { todoInitialValue, TodoStoreTypes } from './types'

const useTodoStore = create<TodoStoreTypes>((set, get) => ({
  store: todoInitialValue,
  addTodo: (todo) => {
    set((state) => ({ store: [todo, ...state.store] }))
  },
  setTodoStatus: (isFinished, todoId) => {
    const newStore = get().store.map((item) =>
      item.id === todoId ? { ...item, isFinished } : item
    )
    set(() => ({ store: newStore }))
  },
  editTodoName: (value, todoId, stringName) => {
    const newStore = get().store.map((item) =>
      item.id === todoId
        ? { ...item, [stringName]: { ...item[stringName], value } }
        : item
    )
    set(() => ({ store: newStore }))
  },
}))

export { useTodoStore }
