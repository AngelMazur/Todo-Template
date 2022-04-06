import React from 'react'

//COMPONENTS
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodoButton from './components/CreateTodoButton'

//STYLES

const todo = [
  { text: 'Learn React', completed: true },
  { text: 'Learn Ingles', completed: false },
  { text: 'Learn Vue', completed: false },
]
const App = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todo.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
