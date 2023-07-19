import React from 'react'

function TodoTitle({total, completed}) {
  return (
    <h1 style={{
        fontSize: '24px',
    }}>
        Has completado {completed} de {total} TODOs
    </h1>
  );
}

export default TodoTitle