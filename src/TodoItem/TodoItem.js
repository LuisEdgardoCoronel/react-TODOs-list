import React from 'react'
import { FcOk, FcEmptyTrash } from "react-icons/fc";
import './styles.css'

function TodoItem({text, completed, onCompleted, onDeleted}){
    return(
      <li className={`${completed && "active"}`}>

        <span onClick={onCompleted}><FcOk className='span-icons'/></span>

        <p className={`${completed? "through":"none"}`}>{text}</p>

        <span onClick={onDeleted}><FcEmptyTrash className='span-icons'/></span>

      </li>
    );
  }

export default TodoItem