import React from 'react'

//COMPONENTS
import CreateTodoButton from './components/CreateTodoButton'
import Header from './components/TodoHeader'
import Modal from './components/Modal'
import TodoCounter from './components/TodoCounter'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoSearch from './components/TodoSearch'
import useTodos from './components/Hooks/useTodos'

//PAGES
import LoadingState from './pages/LoadingState'
import ErrorState from './pages/ErrorState'
import EmptyState from './pages/EmptyState'

//STYLES
import './styles/App.style.css'

const App = () => {
  const {
    addTodo,
    completedTodos,
    deleteTodo,
    error,
    loading,
    openModal,
    toggleCompleteTodo,
    totalTodos,
    search,
    searchedTodos,
    setOpenModal,
    setSearch,
  } = useTodos()

  return (
    <>
      {loading && <LoadingState />}

      {error && <ErrorState />}

      {!loading && !searchedTodos.length && !error && <EmptyState />}

      {!loading && searchedTodos.length && (
        <>
          <Header>
            <TodoCounter
              completedTodos={completedTodos}
              totalTodos={totalTodos}
            />
            <TodoSearch
              search={search}
              setSearch={setSearch}
              />
          </Header>

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
          <CreateTodoButton
            openModal={openModal}
            setOpenModal={setOpenModal}
            />
        </>
      )}
      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  )
}

export default App
