import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './TodoContext'

import '../styles/TodoCounter.style.css'
const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext)
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} Tareas
    </h2>
  )
}

export default TodoCounter
