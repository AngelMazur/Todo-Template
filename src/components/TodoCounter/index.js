import React from 'react'

import './TodoCounter.style.css'
const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} Tareas
    </h2>
  )
}

export default TodoCounter
