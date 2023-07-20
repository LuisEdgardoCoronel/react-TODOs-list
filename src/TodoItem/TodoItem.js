import React from 'react'
import './styles.css'

function TodoItem({text, completed, onCompleted, onDeleted}){
    return(
      <li className={`${completed && "active"}`}>

        <span onClick={onCompleted}>V</span>

        <p className={`${completed? "through":"none"}`}>{text}</p>

        <span onClick={onDeleted}>X</span>
        
      </li>
    );
  }

export default TodoItem