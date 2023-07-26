import React from 'react'
import './styles.css'
import TodoSearch from '../TodoInput'
import TodoBtnCreate from '../TodoBtnCreate'
import icontodo from '../../img/icon.svg'



function TodoCreateDesktop() {
  return (
    <div className='container-desktop'>
      <h2>Ingrese una nueva tarea</h2>  
      <textarea></textarea>
      <TodoBtnCreate text={"Crear"}/>
      <img src={icontodo} alt="imagen simbolica"/>
    </div>
  )
}

export default TodoCreateDesktop