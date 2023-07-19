import './App.css';
import TodoTitle from './TodoTitle';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoBtnCreate from './TodoBtnCreate';
import React from 'react';


const defaulTodos =[
  { text: 'Aprender React', completed: true},
  {text: 'Conocer librerias', completed: false},
  {text: 'Crear Proyectos', completed: false},
  {text:'Aprender React Native', completed: false}
];



function App() {

  return (
    <React.Fragment>
      <TodoTitle total={5} completed={2}/>
      <TodoSearch/>

      <TodoList>
        {defaulTodos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <TodoBtnCreate/>
    </React.Fragment>
  );
}



export default App;
