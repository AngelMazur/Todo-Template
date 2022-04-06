import React from 'react'
import '../styles/TodoItem.style.css'
import checked from '../Images/checked.png'
import checkedCompleted from '../Images/checkedCompleted.png'

// import { checkboxCompleted } from '../../public/checkbox-completed.png'
const TodoItem = ({ text, completed }) => {
  return (
    <li className="TodoItem">
      <img src={completed ? checkedCompleted : checked} className={`Icon Icon-check ${completed && 'Icon-check--active'}`} alt='checked'/>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
        {text}
      </p>
      <span className="Icon Icon-delete"> X </span>
    </li>
  )
}

export default TodoItem
