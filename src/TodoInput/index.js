import React from 'react'
import './styles.css'

function TodoInput({placeholder, inputState, setInputState}) {

  

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