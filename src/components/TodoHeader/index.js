import React from 'react'
import './TodoHeader.style.css'
const Header = ({ children, loading, error, totalTodos }) => {
  return (
    <header
      className={
      (loading || error || !totalTodos) ? 'TodoHeader-empty' : 'TodoHeader'
      }
    >
      {children}
    </header>
  )
}

export default Header
