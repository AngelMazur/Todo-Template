import React from 'react'
import { createContext, useState } from 'react'
import useLocalStorage from '../components/Hooks/useLocalStorage'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  //PROPS PROVIDER
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])

  //USESTATE
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

  //CONSTANTES DE CONTADOR TODO
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length

  //ARRAY PARA PINTAR TODOS LOS TODOS
  let searchedTodos = []

  //CONDICIONAL PARA BUSCAR TODOS
  if (search.length >= 1) {
    searchedTodos = todos.filter((todo) => {
      const todosText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todosText.includes(searchText)
    })
  } else {
    searchedTodos = todos
  }

  //FUNCION PARA TOGGLE DE  TODO
  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  //FUNCION PARA AÑADIR TODO
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({ text, completed: false })
    saveTodos(newTodos)
  }

  //FUNCION PARA ELIMINAR TODO
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider
      value={{
        addTodo,
        completedTodos,
        deleteTodo,
        error,
        loading,
        openModal,
        toggleCompleteTodo,
        totalTodos,
        searchedTodos,
        search,
        setOpenModal,
        setSearch,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
