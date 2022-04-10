import React from 'react'
import { useState } from 'react'
import '../styles/TodoItem.style.css'
import checked from '../Images/checked.png'
import checkedCompleted from '../Images/checkedCompleted.png'

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  const [isChecked, setIsChecked] = useState(completed)

  return (
    <li className="TodoItem">
      <img
        src={completed ? checkedCompleted : checked}
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        alt="checked"
        onClick={onComplete}
        value = {isChecked}
      />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  )
}

export default TodoItem
