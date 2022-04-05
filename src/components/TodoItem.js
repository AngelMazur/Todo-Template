import React from 'react'

const TodoItem = ({text}) => {
  return (
    <li>
      <input type='checkbox' />
      <p>{text}</p>
      <span> X </span>
    </li>
  )
}

export default TodoItem