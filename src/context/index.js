import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

  const {
    item, 
    saveItem:saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_v1',[]);//contiene todos los todos


  const[openModal, setOpenModal] = React.useState(false);//contiene el estado del modal
  const [inputState, setInputState] = React.useState('');//contiene el texto de los inputs


  const completedTodos = item.filter(todo => !!todo.completed).length;
  const totalTodos = item.length;

  const searchedTodos = item.filter(
    (todo) => {
      console.log(todo.text);
      const todoText = todo.text.toLowerCase();
      const searchText = inputState.toLowerCase();
      return todoText.includes(searchText)
    }
  );



  const completeTodo = (text) =>{//actualizador de todos a true
    const newTodos = [...item]
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text
    );
    newTodos[todoIndex].completed =true
    saveTodos(newTodos)
  };


  const deleteTodo = (text) =>{//borrar todos
    const newTodos = [...item]
    const todoIndex = newTodos.findIndex(
      (todo)=> todo.text === text
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos)
  };


  const addTodo = (text) => {
    const newTodos = [...item]
    newTodos.push({
      text,
    completed:false,
  })
    saveTodos(newTodos);
  }

  const modalView = () =>{
    setOpenModal(!openModal)
  }




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
      error,
      openModal,
      setOpenModal, 
      modalView,
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider};