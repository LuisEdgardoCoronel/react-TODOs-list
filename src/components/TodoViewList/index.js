import React from 'react'
import './style.css'
import TodoBtnCreate from '../TodoBtnCreate/index'
import TodoTitle from '../TodoTitle'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import TodoModal from '../TodoModal/TodoModal'
import pensando from '../../img/pensando.svg'
import ReactLoading from 'react-loading';
import { TodoContext } from '../../context'



function TodoViewList() {

  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error
  } = React.useContext(TodoContext)

  return (
    <div className='view-list-container'>
      <img src={pensando} alt="chica pensando" className='icon-pensando'/>
        <TodoTitle/>
          <TodoModal />
          <TodoInput  placeholder={"Buscar tareas"}/>
          <TodoList>
            {loading && 
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <ReactLoading type='spokes' />
            </div>}
            {error && <p>Hubo un error</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primer todo!</p>}
            {searchedTodos.map(todo => (
              <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => { completeTodo(todo.text) } }
              onDeleted={() => { deleteTodo(todo.text) } } />
              ))}
          </TodoList>

        <TodoBtnCreate text={"Nuevo"}/>
    </div>
  )
}

export default TodoViewList