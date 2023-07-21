import React from 'react'
import './style.css'
import TodoBtnCreate from '../TodoBtnCreate/index'
import TodoTitle from '../TodoTitle'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'


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
      <TodoTitle 
      completed={completedTodos} 
      total={totalTodos}
      />
      
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

      
        <TodoBtnCreate/>
    </div>
  )
}

export default TodoViewList