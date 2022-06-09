import { useState } from 'react'
// import useLocalStorage from './useLocalStorage'
import useLocalStorageWithReducer from './useLocalStorageWithReducer'

export const useTodos = () => {
  //PROPS
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorageWithReducer('TODOS_V1', [])

  //USESTATE
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

  //CONSTANTES DE CONTADOR TODO
  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length

  //ARRAY PARA PINTAR TODOS LOS TODOS
  let searchedTodos = []

  //CONDICIONAL PARA BUSCAR LETRAS EN TODOS
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
  const stateUpdaters = {
    toggleCompleteTodo,
    deleteTodo,
    addTodo,
    setOpenModal,
    setSearch,
  }
  const state = {
    search,
    completedTodos,
    error,
    loading,
    openModal,
    totalTodos,
    searchedTodos,
  }
  return { state, stateUpdaters }
  }

export default useTodos
