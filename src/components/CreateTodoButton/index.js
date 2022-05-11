import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './CreateTodoButton.style.css'

const CreateTodoButton = () => {
  const { setOpenModal, openModal } = useContext(TodoContext)

  const toogleOpenModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        toogleOpenModal()
      }}
    >
      +
    </button>
  )
}
export default CreateTodoButton
