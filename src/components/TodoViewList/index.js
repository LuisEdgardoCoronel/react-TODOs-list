import React from 'react'
import './style.css'
import TodoBtnCreate from '../TodoBtnCreate/index'
import TodoTitle from '../TodoTitle'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import TodoModal from '../TodoModal/TodoModal'
import pensando from '../../img/pensando.svg'


//TODO:agregar modal








function TodoViewList({
  completedTodos,
  totalTodos,
  inputState,
  setInputState,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {


  return (
    <div className='view-list-container'>
      <img src={pensando} alt="chica pensando" className='icon-pensando'/>
      
      <TodoTitle 
      completed={completedTodos} 
      total={totalTodos}
      />
      

      <TodoModal/>
      
      <TodoInput
      placeholder={"Buscar tareas"}
      inputState={inputState}
      setInputState={setInputState}/>

      <TodoList>
        {searchedTodos.map(todo=>(
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onCompleted={()=>{completeTodo(todo.text)}}
          onDeleted={()=>{deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>

      
        <TodoBtnCreate text={"Nuevo"}/>
    </div>
  )
}

export default TodoViewList