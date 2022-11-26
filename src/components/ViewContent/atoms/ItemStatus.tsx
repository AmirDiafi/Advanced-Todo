import { ToDoTypes } from '../../Dashboard/types'

export const ItemStatus = ({
  setTodoStatus,
  item,
}: {
  setTodoStatus: (isFinished: boolean, todoId: string) => void
  item: ToDoTypes
}) => {
  return (
    <div className='todo_item_status'>
      <button
        className={
          'todo_item_status_button ' + (item.isFinished ? 'finished' : '')
        }
        onClick={() => {
          setTodoStatus(!item.isFinished, item.id)
        }}
      />
    </div>
  )
}
