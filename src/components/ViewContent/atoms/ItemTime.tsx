import moment from 'moment'
import { ItemTimeProps } from '../types'

export const ItemTime = ({ item }: ItemTimeProps) => {
  return (
    <div>
      <p className='todo_item_time'>
        {moment(item.date.value as Date).calendar()} 🗓
      </p>
    </div>
  )
}
