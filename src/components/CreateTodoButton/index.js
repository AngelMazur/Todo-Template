import React from 'react'
import './CreateTodoButton.style.css'

const CreateTodoButton = ({ error, setOpenModal, openModal, loading }) => {
  const toogleOpenModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <button
      className={
        (loading || error) ? 'CreateTodoButton-empty' : 'CreateTodoButton'
      }
      onClick={() => {
        toogleOpenModal()
      }}
    >
      +
    </button>
  )
}
export default CreateTodoButton
