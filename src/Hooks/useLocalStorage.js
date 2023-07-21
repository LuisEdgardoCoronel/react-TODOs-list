import React from 'react'


function useLocalStorage(itemName, initialValue){
  const localStorageItems = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
    }else{
    parsedItem = JSON.parse(localStorageItems);
  }
    
  const [items, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItems) => {// modifica el localStorage y el estado
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }
  
  return [items, saveItem]
}

export {useLocalStorage}