import React from 'react'
import './styles.css'

function TodoBtnCreate() {
  return (
    <button className='button' onClick={(event)=>{
      console.log("hiciste click")
      console.log(event);
    }}>New</button>
  )
}

export default TodoBtnCreate