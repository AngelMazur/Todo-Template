import React from 'react'
import TodoCounter from '../components/TodoCounter'
import TodoSearch from '../components/TodoSearch'

const ErrorState = () => {
  return (
    <>
          <TodoCounter />
          <TodoSearch />
          <p className="ErrorState">Error...</p>
        </>
  )
}

export default ErrorState