import React from 'react'
import '../styles/CreateTodoButton.style.css'

const CreateTodoButton = () => {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        console.log('CreateTodoButton clicked')
      }}
    >
      +
    </button>
  )
}
export default CreateTodoButton
