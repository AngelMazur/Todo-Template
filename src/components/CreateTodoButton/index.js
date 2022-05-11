import React from 'react'
import './CreateTodoButton.style.css'

const CreateTodoButton = ({ setOpenModal, openModal }) => {

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
