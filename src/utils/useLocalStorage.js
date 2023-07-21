import React from 'react'

//customs hooks
function useLocalStorage(itemName, initialValue){
    let parsedItem;
    
    const localStorageItems = localStorage.getItem(itemName);
    if (!localStorageItems) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItems);
    }
    
    const [items, setItems] = React.useState();
  
    const saveItem = (newItems) => {// modifica el localStorage y el estado
      localStorage.setItem(itemName, JSON.stringify(newItems))
      setItems(newItems)
    }
  
    return [items, saveItem]
  }

export default useLocalStorage