import React from 'react'
import TodoSearch from '../components/TodoSearch'
import '../styles/App.style.css'

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

//TODO: Crear stilos para que oculte los componentes que no sean necesarios, eso se puede hacer con css