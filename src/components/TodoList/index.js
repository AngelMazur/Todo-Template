import React from 'react'

//COMPONENTS
// import EmptyResult from '../../pages/EmptyResult'

//STYLES
import './TodoList.style.css'

const TodoList = ({
  error,
  loading,
  onError,
  onEmptyState,
  onLoading,
  onEmptyResult,
  render,
  searchedTodos,
  searchText,
  totalTodos,
}) => {
  // const renderFunction = props.render || props.children
  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!totalTodos && !error && !loading && onEmptyState()}
      {(!searchedTodos.length && !!totalTodos) && onEmptyResult(searchText)}
      {searchedTodos.map(render)}
    </section>
  )
}

export default TodoList
