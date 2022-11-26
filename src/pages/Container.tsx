import React, { useState } from 'react'
import AddModal from '../components/Dashboard'
import Navbar from '../components/Navbar'
import ViewContent from '../components/ViewContent'

export const Container = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <Navbar setModalOpen={setModalOpen} />
      <ViewContent />
      <AddModal isOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}
