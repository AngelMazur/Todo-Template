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
import EmptyState from './pages/EmptyState'
import EmptyResult from './pages/EmptyResult'
import ErrorState from './pages/ErrorState'

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
  console.log(`No se encuentra en el buscador -> ${!searchedTodos.length}`)
  console.log(`Existen TODOs -> ${!!totalTodos}`)
  return (
    <>

        <>
          <Header>
            <TodoCounter
              completedTodos={completedTodos}
              totalTodos={totalTodos}
            />
            <TodoSearch search={search} setSearch={setSearch} />
          </Header>

          <TodoList
            error={error}
            loading={loading}
            searchText={search}
            searchedTodos={searchedTodos}
            totalTodos={ totalTodos}
            //render props
            onError={() => <ErrorState />}
            onLoading={() => <LoadingState />}
            onEmptyResult={() => <EmptyResult searchText={search} />}
            onEmptyState={() => <EmptyState/>}
            render={(item) => ( 
              <TodoItem
                key={item.text}
                text={item.text}
                completed={item.completed}
                onComplete={() => toggleCompleteTodo(item.text)}
                onDelete={() => deleteTodo(item.text)}
              />
            )}
          />
          <CreateTodoButton
            openModal={openModal}
            setOpenModal={setOpenModal}
            />
        </>
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
