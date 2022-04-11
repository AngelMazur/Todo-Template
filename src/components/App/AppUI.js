import React from 'react'

//COMPONENTS
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import CreateTodoButton from '../CreateTodoButton'



const AppUI = ({
  totalTodos,
  completedTodos,
  searchedTodos,
  search,
  setSearch,
  toggleCompleteTodo,
  deleteTodo,
}) => {
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