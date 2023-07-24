import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
// import TodoInput from '../TodoInput'
// import TodoBtnCreate from '../TodoBtnCreate'

function TodoModal({childen}) {
  return ReactDOM.createPortal(
    <div className='modal-container enabled'>
      {childen}
    </div>, document.getElementById('modal')
  )
  // return (
  //   <div className='modal-container disabled'>
  //     <h3>Ingrese una nueva tarea</h3>
  //     <TodoInput/>
  //     <TodoBtnCreate 
  //     text={"Crear"}/>
  //   </div>
  // )
}

export default TodoModal