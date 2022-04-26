import React from 'react'
import TodoCounter from '../components/TodoCounter'
import TodoSearch from '../components/TodoSearch'
import CreateTodoButton from '../components/CreateTodoButton'

const EmptyState = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <p className="InitialState">Crea tu primer TODO!</p>
      <CreateTodoButton />
    </>
  )
}

export default EmptyState
