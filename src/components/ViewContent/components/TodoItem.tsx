import { useState, useEffect } from 'react'
import { useTodoStore } from '../../../store/todos'
import { ToDoTypes } from '../../Dashboard/types'
import { ItemDescription } from '../atoms/ItemDescription'
import { ItemStatus } from '../atoms/ItemStatus'
import { ItemTime } from '../atoms/ItemTime'
import { ItemTitle } from '../atoms/ItemTitle'

export const TodoItem = ({
  item,
  resetIsEditing,
  editingNameId,
  setEditingNameId,
  editingDescId,
  setEditingDescId,
}: {
  item: ToDoTypes
  editingNameId: string | undefined
  editingDescId: string | undefined
  setEditingNameId: React.Dispatch<React.SetStateAction<string | undefined>>
  setEditingDescId: React.Dispatch<React.SetStateAction<string | undefined>>
  resetIsEditing: () => void
}) => {
  const { setTodoStatus, editTodoName } = useTodoStore()
  const [todo, setTodo] = useState(item)

  useEffect(() => {
    setTodo(item)
  }, [item, setTodo])

  return (
    <div onClick={resetIsEditing} key={item.id} className='todo_content_item'>
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
      <ItemTime item={item} />
    </div>
  )
}
