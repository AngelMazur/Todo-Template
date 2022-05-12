import React from 'react'
import { useState } from 'react'

import './TodoForm.style.css'

const TodoForm = ({ addTodo, setOpenModal }) => {
  const [newTodoValue, setNewTodoValue] = useState('')

  //FUNCION PARA CANCELAR MODAL
  const onCancel = () => {
    setOpenModal(false)
  }
  //FUNCION PARA AGREGAR TODO Y CERRAR MODAL
  const handleSubmit = () => {
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  
  //FUNCION PARA HACER SUBMIT CON ENTER
  const onKeyUp = (e) => {
    if (e.key === 'Enter') return handleSubmit()
  }

  //FUNCION PARA CAMBIAR EL VALOR DEL INPUT
  const onChange = (e) => {
    setNewTodoValue(e.target.value)
  }

  //FUNCION DE SUBMIT
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <form onSubmit={onSubmit}>
      <label>
        <h3>Escribe nueva Tarea</h3>
      </label>
      <textarea
        autoFocus
        autoCorrect="on"
        cols="30"
        id="comment"
        name="comment"
        onKeyUp={onKeyUp}
        onChange={onChange}
        placeholder="Escribe aquí..."
        rows="10"
        required
        value={newTodoValue}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
          type="cancel"
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Enviar
        </button>
      </div>
    </form>
  )
}

export default TodoForm
