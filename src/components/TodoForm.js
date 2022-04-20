import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { TodoContext } from './TodoContext'

import '../styles/TodoForm.style.css'

const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = useState('')

  //FUNCION PARA CANCELAR MODAL
  const onCancel = () => {
    setOpenModal(false)
  }
  //FUNCION PARA CAMBIAR EL VALOR DEL INPUT
  const onChange = (e) => {
    setNewTodoValue(e.target.value)
  }

  //FUNCION PARA GUARDAR TODO
  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit}>
      <label><h3>Escribe nuevo TODO</h3></label>
      <textarea
        cols="30"
        id="comment"
        name="comment"
        onChange={onChange}
        placeholder="Es de bien nacido, ser agradecido"
        rows="10"
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

        <button
        className="TodoForm-button TodoForm-button-add"
        type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default TodoForm
