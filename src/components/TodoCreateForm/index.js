import React from 'react'
import TodoBtnCreate from '../TodoBtnCreate'
import './styles.css'
import { TodoContext } from '../../context'


function TodoCreateForm() {
  const {
    setOpenModal,
    newTodoValue,
    onSubmit,
    onChange
  } = React.useContext(TodoContext)


  return (
    <form onSubmit={onSubmit} className='modal-container'>
      <label htmlFor="createTodo" className='lbl-modal'>Ingrese una nueva tarea</label>
      <textarea id='createTodo' 
      className='txt-modal' 
      value={newTodoValue}
      onChange={onChange}
      ></textarea>
      <div className='btn-container'>
        <button type="button" className='cancel' onClick={()=>{
          setOpenModal(false);
        }}>Cerrar</button>
        <TodoBtnCreate 
        text={"Crear"}
        />
      </div>
    </form>
  )
}

export default TodoCreateForm