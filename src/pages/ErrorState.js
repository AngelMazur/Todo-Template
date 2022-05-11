import React from 'react'
import TodoSearch from '../components/TodoSearch'
import '../styles/ErrorState.style.css'

const ErrorState = () => {
  return (
    <>
          <h2 className='message'>No hay Todos existentes</h2>
          <TodoSearch />
          <p className="ErrorState">Error...</p>
        </>
  )
}

export default ErrorState