import create from 'zustand'
import { todoInitialValue, TodoStoreTypes } from './types'

const useTodoStore = create<TodoStoreTypes>((set, get) => ({
  store: todoInitialValue,
  addTodo: (todo) => {
    const editedStore = [todo, ...get().store]

    const finished = editedStore.filter((item) => item.isFinished)
    const unFinished = editedStore.filter((item) => !item.isFinished)
    const newStore = [...finished, ...unFinished]
    set(() => ({ store: newStore }))
  },
  setTodoStatus: (isFinished, todoId) => {
    const editedStore = get().store.map((item) =>
      item.id === todoId ? { ...item, isFinished } : item
    )

    const finished = editedStore.filter((item) => item.isFinished)
    const unFinished = editedStore.filter((item) => !item.isFinished)
    const newStore = [...finished, ...unFinished]
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
  deleteItem: (itemId) => {
    const newStore = get().store.filter((item) => item.id !== itemId)
    set(() => ({ store: newStore }))
  },
}))

export { useTodoStore }
