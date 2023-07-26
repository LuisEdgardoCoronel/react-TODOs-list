import React from 'react'
import ReactDOM from "react-dom";
import './style.css'

function TodoModal({children}) {
  const modalRoot = document.getElementById('modal')
  return ReactDOM.createPortal(
    <div className='background-modal'>
      <div className='modal'>{children}</div>
    </div>, modalRoot
  );
}

export default TodoModal