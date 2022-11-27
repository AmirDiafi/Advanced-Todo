import './style/index.css'
import { useTodoStore } from '../../store/todos'
import { TodoList } from './components/TodoList'
import { EmptyList } from './atoms/EmptyList'

const ViewContent = () => {
  const { store } = useTodoStore()
  return (
    <div className='todo_content_container'>
      {store.length === 0 ? <EmptyList /> : <TodoList data={store} />}
    </div>
  )
}

export default ViewContent
