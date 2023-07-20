import React from 'react'
import './TodoTitle.css'

function TodoTitle({total, completed}) {
  return (
    <h1>
        {completed !== 0?`Has completado ${completed} de ${total} TODOs`:"No tienes TODOs pendientes"}
    </h1>
  );
}

export default TodoTitle