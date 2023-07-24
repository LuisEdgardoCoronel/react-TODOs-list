import React from 'react'
import './styles.css'
import { TodoContext } from '../../context';

function TodoInput({placeholder}) {
  const {
    inputState,
    setInputState,
  } = React.useContext(TodoContext);
  return (
    <div className='container-input'>
      <input className='input' 
      placeholder={placeholder}
      value={inputState}
      onChange={(event)=>{
        setInputState(event.target.value);
      }}/>
    </div>
  );
}

export default TodoInput