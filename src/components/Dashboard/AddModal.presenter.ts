import moment from 'moment'
import { FormEvent, useCallback, useId, useMemo, useState } from 'react'
import { onValidate } from '../../helpers'
import { useTodoStore } from '../../store/todos'
import { initialTodo, initialDate } from './constants'
import { v4 as uuidv4 } from 'uuid'

const useAddTodo = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [todo, setTodo] = useState(initialTodo)
  const { addTodo } = useTodoStore()
  const onClose = useCallback(() => {
    setModalOpen(false)
    setTodo(initialTodo)
  }, [initialTodo, setModalOpen, setTodo])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const nameValidation = onValidate(todo.name, setTodo)
      const dateValidation = onValidate(todo.date, setTodo)
      if (nameValidation && dateValidation) {
        const newTodo = {
          ...todo,
          id: uuidv4(),
        }
        addTodo(newTodo)
        onClose()
      }
    },
    [todo, onClose]
  )

  const inputs = useMemo(() => {
    const inputs_data = [
      {
        id: 'fe:45',
        type: 'text',
        value: todo.name.value as string,
        name: 'name',
        placeholder: 'name: gym 🏋️‍♀️',
        error: todo.name.error,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setTodo((v) => ({
            ...v,
            name: {
              ...v.name,
              value: e.target.value,
              error: e.target.value.length < 3,
            },
          }))
        },
      },
      {
        id: 'fc:35',
        type: 'text',
        value: todo.description.value as string,
        name: 'description',
        error: todo.description.error,
        placeholder: 'description: gym after work 👷‍♂️ (optional)',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setTodo((v) => ({
            ...v,
            description: {
              ...v.description,
              value: e.target.value,
            },
          }))
        },
      },
      {
        id: 'bc:69',
        type: 'datetime-local',
        value: moment((todo.date.value ?? initialDate) as Date).format(
          'YYYY-MM-DD HH:mm'
        ),
        name: 'date',
        error: todo.date.error,
        placeholder: 'Please add date',
        min: moment(initialDate).format('YYYY-MM-DD HH:mm'),
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          const date = moment(e.target.value).toDate()
          setTodo((v) => ({
            ...v,
            date: {
              ...v.date,
              value: date,
            },
          }))
        },
      },
    ]
    return inputs_data
  }, [todo, setTodo])

  return {
    onSubmit,
    inputs,
    onClose,
  }
}

export { useAddTodo }
