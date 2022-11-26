import moment from 'moment'
import { ToDoTypes } from '../../Dashboard/types'

export const ItemTime = ({ item }: { item: ToDoTypes }) => {
  return (
    <div>
      <p className='todo_item_time'>
        {moment(item.date.value as Date).calendar()} 🗓
      </p>
    </div>
  )
}
