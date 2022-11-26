import { SetStateAction } from 'react'
import { InputEnum } from '../../Dashboard/constants'
import { ToDoTypes } from '../../Dashboard/types'

export const ItemTitle = ({
  editingNameId,
  item,
  todo,
  editTodoName,
  setTodo,
  setEditingNameId,
}: {
  editingNameId: string | undefined
  item: ToDoTypes
  todo: ToDoTypes
  editTodoName: (value: string, todoId: string, stringName: InputEnum) => void
  setTodo: React.Dispatch<SetStateAction<ToDoTypes>>
  setEditingNameId: React.Dispatch<SetStateAction<string | undefined>>
}) => {
  return (
    <div
      className='todo_item_name_container'
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {editingNameId === item.id ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if ((todo.name.value?.toString().length ?? 0) > 2) {
              editTodoName(
                todo.name.value?.toString() as string,
                item.id,
                InputEnum.name
              )
              setEditingNameId('')
              setTodo(item)
            } else {
              alert('Oops!, invalid todo name')
            }
          }}
        >
          <input
            className={
              'edit_input ' + (todo.name.error ? 'edit_input_error' : '')
            }
            type={'text'}
            value={todo.name.value as string}
            placeholder='name: gym 🏋️‍♀️'
            onChange={(e) => {
              setTodo((v) => ({
                ...v,
                name: {
                  ...v.name,
                  value: e.target.value.toString(),
                  error: e.target.value.toString().length < 3,
                },
              }))
            }}
          />
        </form>
      ) : (
        <p
          className='todo_item_name'
          onClick={() => {
            setEditingNameId(item.id)
          }}
        >
          {(item.name.value?.toString().length ?? 0) > 15
            ? item.name.value?.toString().slice(0, 15) + '...'
            : item.name.value?.toString()}{' '}
        </p>
      )}
    </div>
  )
}
