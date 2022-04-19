import React from 'react'
import AppUI from './components/App/AppUI'
import { TodoProvider } from './components/TodoContext'

//TODO:BORRAR TODOS LOS TODOS
// export const defaultTodos = [
//   { text: 'Learn React', completed: true },
//   { text: 'Learn Ingles', completed: false },
//   { text: 'Learn Vue', completed: false },
//   { text: 'Learn Angular', completed: false },
// ]

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
