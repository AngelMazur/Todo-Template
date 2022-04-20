import React from 'react'
import { useContext } from 'react'

//COMPONENTS
import CreateTodoButton from '../CreateTodoButton'
import Modal from '../Modal'
import TodoCounter from '../TodoCounter'
import TodoForm from '../TodoForm'
import TodoItem from '../TodoItem'
import TodoList from '../TodoList'
import TodoSearch from '../TodoSearch'
import { TodoContext } from '../TodoContext'

const AppUI = () => {
  const {
    deleteTodo,
    error,
    loading,
    openModal,
    toggleCompleteTodo,
    searchedTodos,
  } = useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

      <TodoList>
        {searchedTodos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => toggleCompleteTodo(item.text)}
            onDelete={() => deleteTodo(item.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  )
}

export default AppUI
