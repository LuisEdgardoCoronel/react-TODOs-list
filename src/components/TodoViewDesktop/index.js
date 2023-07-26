import React from 'react'
import './styles.css'
import TodoBtnCreate from '../TodoBtnCreate'
import icontodo from '../../img/icon.svg'
import { TodoContext } from '../../context'



function TodoCreateDesktop() {
  const {
    newTodoValue,
    onChange,
    addNewTodo
  } = React.useContext(TodoContext)
  return (
    <div className='container-desktop'>
      <h2>Ingrese una nueva tarea</h2>  
      <textarea
      value={newTodoValue}
      onChange={onChange}></textarea>
      <TodoBtnCreate
      functions={()=>{
        addNewTodo()
      }}
       text={"Crear"}/>
      <img src={icontodo} alt="imagen simbolica"/>
    </div>
  )
}

export default TodoCreateDesktop