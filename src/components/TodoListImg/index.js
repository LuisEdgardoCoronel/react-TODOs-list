import React from 'react'
import iconlist from '../../img/img-list.svg'
import './styles.css'

function TodoListImg() {
  return (
    <div className='todo-list-img'>
        <h3>Crea nuevas tareas</h3>
        <img src={iconlist} alt="imagen ilustrativa"/>
    </div>
  )
}

export default TodoListImg