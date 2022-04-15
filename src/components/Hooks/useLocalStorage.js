import { useState } from 'react'

function useLocalStorage (itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem
  
  // Parse the localStorage string and store it in parsedItem.
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  //SAVE STORAGE OF FUNCTION TOGGLECOMPLETE AND DELETE
  const [item, setItem] = useState(parsedItem)
  const saveItem = (newItem) => {
    const ItemJSON = JSON.stringify(newItem)
    localStorage.setItem(itemName, ItemJSON)
    setItem(newItem)
  }
  return [
    item,
    saveItem,
  ]
}

export default useLocalStorage