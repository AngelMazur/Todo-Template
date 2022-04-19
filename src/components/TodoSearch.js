import React from 'react'
import { useContext } from 'react'
import { TodoContext } from  './TodoContext'
import '../styles/TodoSearch.style.css'

const TodoSearch = () => {
  const { search, setSearch } = useContext(TodoContext)

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
