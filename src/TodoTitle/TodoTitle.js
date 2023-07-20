import React from 'react'
import './TodoTitle.css'

function TodoTitle({total, completed}) {
  return (
    <h1>
        Has completado {completed} de {total} TODOs
    </h1>
  );
}

export default TodoTitle