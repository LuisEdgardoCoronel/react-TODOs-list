import React from 'react'
import './style.css'
import TodoInput from '../TodoInput'
import TodoBtnCreate from '../TodoBtnCreate'

function TodoModal() {
  return (
    <div className='modal-container enabled'>
      <h3>Ingrese una nueva tarea</h3>
      <TodoInput/>
      <TodoBtnCreate 
      text={"Crear"}/>
    </div>
  )
}

export default TodoModal