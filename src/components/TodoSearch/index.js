import React from 'react'
import './TodoSearch.style.css'

const TodoSearch = ({ search, setSearch }) => {

  const onValueChange = (event) => {
    setSearch(event.target.value)
  }
  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Buscar"
      onChange={onValueChange}
      value={search}
    />
  )
}

export default TodoSearch
