import React from 'react'
import '../styles/TodoCounter.style.css'
const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} Tareas
    </h2>
  )
}

export default TodoCounter
