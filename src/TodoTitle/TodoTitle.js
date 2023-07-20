import React from 'react'
import './TodoTitle.css'
//TODO: agregar span en los props con clases para otro color
function TodoTitle({total, completed}) {
  return (
    <h1>
        Has completado {completed} de {total} TODOs
    </h1>
  );
}

export default TodoTitle