import { useState, useEffect } from 'react'

const  useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem
        // Parse the localStorage string and store it in parsedItem.
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setError(false)
        setLoading(false)
        setItem(parsedItem)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //SAVE STORAGE OF FUNCTION TOGGLECOMPLETE AND DELETE
  const saveItem = (newItem) => {
    try {
      const ItemJSON = JSON.stringify(newItem)
      localStorage.setItem(itemName, ItemJSON)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }
  return {
    error,
    loading,
    item,
    saveItem,
  }
}

export default useLocalStorage
