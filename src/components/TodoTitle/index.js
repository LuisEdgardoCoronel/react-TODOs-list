import React from 'react'
import './styles.css'
import { TodoContext } from '../../context';

function TodoTitle() {
  const {completed,total}=React.useContext(TodoContext)

  return (
    <h1>
        {completed === 0 && total ===0?"No tienes tareas pendientes":`Has completado ${completed} de ${total} tareas`}
    </h1>
  );
}

export default TodoTitle