import React from 'react'
import './style.css'
import TodoBtnCreate from '../TodoBtnCreate/TodoBtnCreate'
import TodoTitle from '../TodoTitle/TodoTitle'
import TodoSearch from '../TodoSearch/TodoSearch'
import TodoList from '../TodoList/TodoList'
import TodoItem from '../TodoItem/TodoItem'

const defaulTodos =[
    { text: 'Aprender React', completed: true},
    {text: 'Conocer librerias', completed: false},
    {text: 'Crear Proyectos', completed: false},
    {text:'Aprender React Native', completed: false}
  ];


//TODO:agregar y crear un modal

function TodoViewList() {
  return (
    <div className='view-list-container'>
      <TodoTitle total={5} completed={2}/>
      <TodoSearch/>

      <TodoList>
        {defaulTodos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      
        <TodoBtnCreate/>
    </div>
  )
}

export default TodoViewList