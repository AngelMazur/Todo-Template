import React from 'react'
import { useState } from 'react'
import './TodoItem.style.css'
import checked from '../../Images/checked.png'
import checkedCompleted from '../../Images/checkedCompleted.png'
import { CgCloseO } from 'react-icons/cg'

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  const [isChecked] = useState(completed)

  return (
    <li className="TodoItem">
      <img
        src={completed ? checkedCompleted : checked}
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        alt="checked"
        onClick={onComplete}
        value={isChecked}
      />
      <p
        className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}
        contentEditable = {true}
        suppressContentEditableWarning={true}
        >
        {text}
      </p>
      <CgCloseO className="Icon Icon-delete" onClick={onDelete} />
    </li>
  )
}

export default TodoItem
