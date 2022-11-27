import './style/index.css'
import { AddModalProps } from './types'
import { ErrorText } from '../ui'
import { useAddTodo } from './AddModal.presenter'

export const AddModalView = ({ isOpen, setModalOpen }: AddModalProps) => {
  const { onSubmit, inputs, onClose } = useAddTodo({ setModalOpen })

  if (!isOpen) return null
  return (
    <div className='add container' onClick={onClose}>
      <div
        className='add_form'
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <h3>Add new Todo 💪</h3>
        <div>
          <form onSubmit={onSubmit}>
            {inputs.map((item) => (
              <div className='inputContainer' key={item.id}>
                <input
                  className='add_input'
                  type={item.type}
                  value={item.value}
                  onChange={item.onChange}
                  maxLength={item.maxLength}
                  name={item.name}
                  placeholder={item.placeholder}
                  min={item.min}
                />
                {item.error && (
                  <ErrorText
                    errorText={
                      item.name === 'name' && item.value
                        ? 'Todo name must be at least 3 characters'
                        : undefined
                    }
                  />
                )}
              </div>
            ))}

            <div>
              <button type='submit' className='add_button'>
                Add
              </button>
            </div>
          </form>
          <div>
            <button onClick={onClose} className='cancel_add_button'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
