import { InputEnum } from '../../Dashboard/constants'
import { ItemDescriptionProps } from '../types'

export const ItemDescription = ({
  editingDescId,
  item,
  todo,
  editTodoName,
  setTodo,
  setEditingDescId,
}: ItemDescriptionProps) => {
  return (
    <div
      className='todo_item_name_container'
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {editingDescId === item.id ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            editTodoName(
              todo.description.value?.toString() as string,
              item.id,
              InputEnum.description
            )
            setEditingDescId('')
            setTodo(item)
          }}
        >
          <input
            className={
              'edit_input ' + (todo.description.error ? 'edit_input_error' : '')
            }
            type={'text'}
            value={todo.description.value as string}
            placeholder='description: gym after work 👷‍♂️ (optional)'
            onChange={(e) => {
              setTodo((v) => ({
                ...v,
                description: {
                  ...v.description,
                  value: e.target.value.toString(),
                  error: e.target.value.toString().length < 3,
                },
              }))
            }}
          />
        </form>
      ) : (
        <p
          className='todo_item_desc'
          onClick={() => {
            setEditingDescId(item.id)
          }}
        >
          {(item.description.value?.toString().length ?? 0) > 45
            ? item.description.value?.toString().slice(0, 45) + '...'
            : item.description.value?.toString()}
        </p>
      )}
    </div>
  )
}
