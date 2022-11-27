import { useState, useEffect } from 'react'
import { useTodoStore } from '../../../store/todos'
import { ToDoTypes } from '../../Dashboard/types'
import { ItemDescription } from '../atoms/ItemDescription'
import { ItemStatus } from '../atoms/ItemStatus'
import { ItemTitle } from '../atoms/ItemTitle'
import { TodoItemProps } from '../types'
import { DeleteItemButton } from '../atoms/DeleteItemButton'

export const TodoItem = ({
  item,
  resetIsEditing,
  editingNameId,
  setEditingNameId,
  editingDescId,
  setEditingDescId,
}: TodoItemProps) => {
  const { setTodoStatus, editTodoName } = useTodoStore()
  const [todo, setTodo] = useState(item)

  useEffect(() => {
    setTodo(item)
  }, [item, setTodo])

  return (
    <div onClick={resetIsEditing} className='todo_content_item'>
      <div className='row'>
        <ItemStatus setTodoStatus={setTodoStatus} item={item} />
        <ItemTitle
          editingNameId={editingNameId}
          item={item}
          todo={todo}
          editTodoName={editTodoName}
          setTodo={setTodo}
          setEditingNameId={setEditingNameId}
        />
        <ItemDescription
          editingDescId={editingDescId}
          item={item}
          todo={todo}
          editTodoName={editTodoName}
          setTodo={setTodo}
          setEditingDescId={setEditingDescId}
        />
      </div>
      <DeleteItemButton item={item} />
    </div>
  )
}
