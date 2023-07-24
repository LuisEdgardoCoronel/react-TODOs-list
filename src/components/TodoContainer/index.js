import React from 'react'
import './styles.css'
import TodoViewList from '../TodoViewList'
import TodoCreateDesktop from '../TodoCreateDesktop'
import { TodoProvider } from '../../context'

function TodoContainer() {

  





  return (
    <div className='container'>
        <TodoProvider>
          <TodoCreateDesktop/>
          <TodoViewList/>
        </TodoProvider>
    </div>
  )
}

export default TodoContainer