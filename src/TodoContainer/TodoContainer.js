import React from 'react'
import './styles.css'
import TodoViewList from '../TodoViewList/TodoViewList'
import TodoCreateDesktop from '../TodoCreateDesktop/TodoCreateDesktop'

function TodoContainer() {
  return (
    <div className='container'>
        <TodoCreateDesktop/>
        <TodoViewList/>
    </div>
  )
}

export default TodoContainer