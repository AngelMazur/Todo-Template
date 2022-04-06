import React from 'react'
import '../styles/TodoList.style.css'

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  )
}

export default TodoList
