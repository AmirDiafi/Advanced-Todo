import { useCallback } from 'react'
import { useTodoStore } from '../../../store/todos'
import { ToDoTypes } from '../../Dashboard/types'
import { ItemTime } from '../atoms/ItemTime'

export type DeleteItemButtonTypes = {
  item: ToDoTypes
}
export const DeleteItemButton = ({ item }: DeleteItemButtonTypes) => {
  const { deleteItem } = useTodoStore()

  const onDelete = useCallback((itemId: string) => {
    const isDelete = confirm('are you sure')
    if (isDelete) {
      deleteItem(itemId)
    }
  }, [])

  return (
    <div className='row todo_item_right_content'>
      <ItemTime item={item} />
      <button
        className='todo_item_delete_button'
        onClick={() => {
          onDelete(item.id)
        }}
      >
        🗑
      </button>
    </div>
  )
}
