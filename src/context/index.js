import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";



const TodoContext = React.createContext();//creamos contexto para todos




function TodoProvider({children}){//inicializamos la funcion que va almacenar todo el contexto

  const {
    item, 
    saveItem:saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_v1',[]);//contiene todos los todos, usamos el localstorage



  const[openModal, setOpenModal] = React.useState(false);//contiene el estado del modal
  const [inputState, setInputState] = React.useState('');//contiene el texto de los inputs



  const completedTodos = item.filter(todo => !!todo.completed).length;//cantidad de todos completados
  const totalTodos = item.length;//cantidad de todos existentes

  const searchedTodos = item.filter(//filtramos los todosItems en el todolist en caso de que escribamos en el input
    (todo) => {
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


  const addTodo = (text) => {//agregar nuevos todos al localstorage
    const newTodos = [...item]
    newTodos.push({
      text,
    completed:false,
  })
    saveTodos(newTodos);
  }



  const modalView = () =>{//visualizar y esconder el modal
    setOpenModal(!openModal)
  }




  const [newTodoValue, setNewTodoValue] = React.useState('');//estados que almacenan los textos del textarea

  
  

  const onSubmit = (event)=>{//funcion para el formulario del modal, para guardar los todos y cerrar modal
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }



  const onChange = (event)=>{//funcion que actualiza los estados del textarea
    setNewTodoValue(event.target.value)
  }




  const addNewTodo = () =>{//funcion que guarda el todo desde la vista desktop
    addTodo(newTodoValue)
    setNewTodoValue('')
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
      newTodoValue,
      setNewTodoValue,
      onChange,
      onSubmit,
      addNewTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider};