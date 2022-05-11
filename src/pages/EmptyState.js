import React from 'react'
import CreateTodoButton from '../components/CreateTodoButton'

const EmptyState = () => {
  return (
    <>
      <p className="InitialState">Crea tu primer TODO!</p>
      <CreateTodoButton />
    </>
  )
}

export default EmptyState
