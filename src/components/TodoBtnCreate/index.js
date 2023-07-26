import React from 'react'
import './styles.css'

function TodoBtnCreate({text, functions}) {
  return (
    <button 
    className='button' 
    onClick={functions}>{text}</button>
  )
}

export default TodoBtnCreate