import { InputEnum } from './components/Dashboard/constants'
import { ToDoTypes, ValueStringType } from './components/Dashboard/types'

const onValidate = (
  data: ValueStringType,
  setTodo: React.Dispatch<React.SetStateAction<ToDoTypes>>
) => {
  switch (data.name) {
    case InputEnum.name:
      if (typeof data.value === 'string' && data.value?.length < 3) {
        setTodo((v) => ({
          ...v,
          name: {
            ...v.name,
            error: true,
          },
        }))
        return false
      }
      break
    case InputEnum.date: {
      if (!data.value) {
        setTodo((v) => ({
          ...v,
          date: {
            ...v.date,
            error: true,
          },
        }))
        return false
      }
    }
    default:
      break
  }
  return true
}

export { onValidate }
