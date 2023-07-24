import React from 'react'


function useLocalStorage(itemName, initialValue){
  const [items, setItem] = React.useState(initialValue);

  const[loading, setLoading] = React.useState(true);
  const[error, setError]= React.useState(false);

  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItems = localStorage.getItem(itemName);
      
        let parsedItem;
  
        if (!localStorageItems) {
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
  },[initialValue, itemName]);
  
  
  const saveItem = (newItems) => {// modifica el localStorage y el estado
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }
  
  return {items, saveItem, loading, error}
}

export {useLocalStorage}