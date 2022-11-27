import { useCallback } from 'react'
import { useTodoStore } from '../../../store/todos'
import { ItemTime } from './ItemTime'
import { DeleteItemButtonTypes } from '../types'

export const DeleteItemButton = ({ item }: DeleteItemButtonTypes) => {
  const { deleteItem } = useTodoStore()

  const onDelete = useCallback(() => {
    const isDelete = confirm('are you sure want to delete this item')
    if (isDelete) {
      deleteItem(item.id)
    }
  }, [])

  return (
    <div className='row todo_item_right_content'>
      <ItemTime item={item} />
      <button className='todo_item_delete_button' onClick={onDelete}>
        🗑
      </button>
    </div>
  )
}
