import React from 'react'
import AppUI from './components/App/AppUI'
import { TodoProvider } from './components/TodoContext'

const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
