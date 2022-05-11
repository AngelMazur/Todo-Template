import React from 'react'
import './TodoList.style.css'

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  )
}

export default TodoList
