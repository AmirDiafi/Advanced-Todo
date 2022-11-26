import { ToDoTypes } from './types'

export enum InputEnum {
  name = 'name',
  description = 'description',
  date = 'date',
}

const initialDate = new Date()
const initialTodo: ToDoTypes = {
  id: 'zf:34',
  name: {
    name: 'name',
    value: '',
    error: false,
  },
  description: {
    name: 'description',
    value: '',
    error: false,
  },
  date: {
    name: 'date',
    value: initialDate,
    error: false,
  },
}

export { initialDate, initialTodo }
