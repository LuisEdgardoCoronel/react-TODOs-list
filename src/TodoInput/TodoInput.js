import React from 'react'
import './styles.css'

function TodoInput({placeholder, inputState, setInputState}) {

  

  return (
    <input className='input' 
    placeholder={placeholder}
    value={inputState}
    onChange={(event)=>{
      setInputState(event.target.value);
    }}/>
  );
}

export default TodoInput