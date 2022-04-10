import React from 'react'
import '../styles/TodoSearch.style.css'

const TodoSearch = ({search, setSearch}) => {

  const onValueChange = (event) => {
    setSearch(event.target.value)
  }
  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Search"
      onChange={onValueChange}
      value={search}
    />
  )
}

export default TodoSearch
