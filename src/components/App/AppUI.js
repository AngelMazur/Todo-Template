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

//PAGES
import LoadingState from '../../pages/LoadingState'
import ErrorState from '../../pages/ErrorState'
import EmptyState from '../../pages/EmptyState'

//STYLES
import './AppUI.style.css'

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
      {loading && <LoadingState />}

      {error && <ErrorState />}

      {!loading && !searchedTodos.length && !error && <EmptyState />}

      {!loading && searchedTodos.length && (
        <>
          <TodoCounter />
          <TodoSearch />

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
        </>
      )}
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  )
}

export default AppUI
