import React from 'react'
import './styles.css'
import TodoSearch from '../TodoInput'
import TodoBtnCreate from '../TodoBtnCreate'
import icontodo from '../../img/icon.svg'



function TodoCreateDesktop() {
  return (
    <div className='container-desktop'>
      <h2>Ingrese una nueva tarea</h2>  
      <div className='create-todo'>
        <TodoSearch placeholder={"Ingrese una nueva tarea"}/>
        <TodoBtnCreate text={"Crear"}/>
      </div>
      <img src={icontodo} alt="imagen simbolica"/>
    </div>
  )
}

export default TodoCreateDesktop