import { useState } from 'react'
import { ToDoTypes } from '../../Dashboard/types'
import { TodoItem } from './TodoItem'

export const TodoList = ({ data }: { data: ToDoTypes[] }) => {
  const [editingNameId, setEditingNameId] = useState<string>()
  const [editingDescId, setEditingDescId] = useState<string>()

  const resetIsEditing = () => {
    setEditingNameId('')
    setEditingDescId('')
  }
  return (
    <div className='todo_content_list'>
      {data.map((item) => {
        return (
          <TodoItem
            item={item}
            resetIsEditing={resetIsEditing}
            editingNameId={editingNameId}
            setEditingNameId={setEditingNameId}
            editingDescId={editingDescId}
            setEditingDescId={setEditingDescId}
          />
        )
      })}
    </div>
  )
}
