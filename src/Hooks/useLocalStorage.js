import React from 'react'


function useLocalStorage(itemName, initialValue){//funcion de localstorage

  const [item, setItem] = React.useState(initialValue);//contiene los estados que van a alacenar la info de los todo item
  const[loading, setLoading] = React.useState(true);//estados de carga
  const[error, setError]= React.useState(false);//estados de error



  React.useEffect(()=>{//usamos un efect
    setTimeout(()=>{//para dar un tiempo a la carga de los todos
      try {
        const localStorageItems = localStorage.getItem(itemName);
      
        let parsedItem;
  
        if (!localStorageItems) {//consultamos si existe la variable en el localstorage y la creamos o usamos 
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem)
        }
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[]);
  
  
  const saveItem = (newItems) => {// modifica el localStorage y el estado
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }
  
  
  return {item, saveItem, loading, error}
}

export {useLocalStorage}