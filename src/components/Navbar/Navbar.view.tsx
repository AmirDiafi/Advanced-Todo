import './style/index.css'
import reactLogo from '../../../public/vite.svg'
import { NavbarProps } from './types'

export const NavbarView = ({ setModalOpen }: NavbarProps) => {
  return (
    <nav className='container row'>
      <div className='row'>
        <h2 className='nav_title'>Todo</h2>
        <img src={reactLogo} />
      </div>
      <div>
        <button onClick={() => setModalOpen((v) => !v)}>+</button>
      </div>
    </nav>
  )
}
