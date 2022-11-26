import './style/index.css'
import { useTodoStore } from '../../store/todos'
import { TodoList } from './components/TodoList'

const ViewContent = () => {
  const { store } = useTodoStore()
  return (
    <div className='todo_content_container'>
      {store.length === 0 ? (
        'You have no todo yet 🙂'
      ) : (
        <TodoList data={store} />
      )}
    </div>
  )
}

export default ViewContent
