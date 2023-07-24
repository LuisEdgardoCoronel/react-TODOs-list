import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

  const {
    items:todos, 
    saveItem:saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_v1',[]);//contiene todos los todos



  const [inputState, setInputState] = React.useState('');//contiene el texto de los inputs


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

  return(
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      inputState,
      setInputState,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider};