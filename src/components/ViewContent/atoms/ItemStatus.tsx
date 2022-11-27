import { ItemStatusProps } from '../types'

export const ItemStatus = ({ setTodoStatus, item }: ItemStatusProps) => {
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
