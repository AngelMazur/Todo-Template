import React from 'react'
import { useContext } from 'react'

//COMPONENTS
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import CreateTodoButton from '../CreateTodoButton'
import { TodoContext } from '../TodoContext'

const AppUI = () => {
  const {
    deleteTodo,
    error,
    loading,
    toggleCompleteTodo,
    searchedTodos,
  } = useContext(TodoContext)
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

      <TodoList>
        {searchedTodos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => toggleCompleteTodo(item.text)}
            onDelete={() => deleteTodo(item.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default AppUI
