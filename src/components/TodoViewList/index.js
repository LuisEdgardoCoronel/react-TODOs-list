import React from 'react'
import './style.css'
import TodoBtnCreate from '../components/TodoBtnCreate/TodoBtnCreate'
import TodoTitle from '../TodoTitle'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import useLocalStorage from '../../utils/useLocalStorage'

// const defaulTodos =[
//     {text: 'Aprender React', completed: true},
//     {text: 'Conocer librerias', completed: false},
//     {text: 'Crear Proyectos', completed: false},
//     {text:'Aprender React Native', completed: false}
//   ];


//TODO:agregar modal








function TodoViewList() {
  const [todos, saveTodos] = useLocalStorage('TODOS_v1',[]);//contiene todos los todos
  const [inputState, setInputState] = React.useState('');//constiene el texto de los inputs


  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

    const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = inputState.toLowerCase();
      return todoText.includes(searchText)
    }
  );



  const completeTodo = (text) =>{//actualizador de todos a true
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text
    );
    newTodos[todoIndex].completed =true
    saveTodos(newTodos)
  };


  const deleteTodo = (text) =>{//borrar todos
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos)
  };

  return (
    <div className='view-list-container'>
      <TodoTitle 
      completed={completedTodos} 
      total={totalTodos}
      />
      
      <TodoInput
      placeholder={"Buscar tareas"}
      inputState={inputState}
      setInputState={setInputState}/>

      <TodoList>
        {searchedTodos.map(todo=>(
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onCompleted={()=>{completeTodo(todo.text)}}
          onDeleted={()=>{deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>

      
        <TodoBtnCreate/>
    </div>
  )
}

export default TodoViewList