import React from 'react'
import { useState } from 'react'

//COMPONENTS
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'


//STYLES

const defaultTodos = [
  { text: 'Learn React', completed: true },
  { text: 'Learn Ingles', completed: false },
  { text: 'Learn Vue', completed: false },
  { text: 'Learn Angular', completed: false },
]

const App = () => {
  const [todos, setTodos] = useState(defaultTodos)
  const [search, setSearch] = useState('')

  //CONSTANTES DE CONTADOR TODO
  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length

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
  const toggleCompleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  //FUNCION PARA ELIMINAR TODO
  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        search={search}
        setSearch={setSearch}
      />
      <TodoList>
        {searchedTodos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => toggleCompleteTodo(todos.indexOf(item))}
            onDelete={() => deleteTodo(todos.indexOf(item))}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
