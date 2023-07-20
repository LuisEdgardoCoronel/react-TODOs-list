import React from 'react'
import './styles.css'
import TodoSearch from '../TodoSearch/TodoSearch'
import TodoBtnCreate from '../TodoBtnCreate/TodoBtnCreate'
import icontodo from '../img/icon.svg'


//TODO: la parte superior agregarla en un modal

function TodoCreateDesktop() {
  return (
    <div className='container-desktop'>
      <h2>Ingrese una nueva tarea</h2>  
      <div className='create-todo'>
        <TodoSearch/>
        <TodoBtnCreate/>
      </div>
      <img src={icontodo} alt="imagen simbolica"/>
    </div>
  )
}

export default TodoCreateDesktop