import React from 'react'
import './TodoTitle.css'

function TodoTitle({total, completed}) {
  return (
    <h1>
        {completed === 0 && total ===0?"No tienes tareas pendientes":`Has completado ${completed} de ${total} tareas`}
    </h1>
  );
}

export default TodoTitle