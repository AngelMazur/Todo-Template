import { useEffect, useReducer } from 'react'

const useLocalStorageWithReducer = (itemName, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))
  const { error, loading, item } = state

  //ACTIONS CREATORS
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error })
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item })
  const onSave = (item) =>
    dispatch({ type: actionTypes.item, payload: item })

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
        onSuccess(parsedItem)
      } catch (error) {
        onError(error)
      }
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //SAVE STORAGE OF FUNCTION TOGGLECOMPLETE AND DELETE
  const saveItem = (newItem) => {
    try {
      const ItemJSON = JSON.stringify(newItem)
      localStorage.setItem(itemName, ItemJSON)
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  }
  return {
    error,
    loading,
    item,
    saveItem,
  }
}

const actionTypes = {
  item: 'ITEM',
  error: 'ERROR',
  success: 'SUCCESS',
}
const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  item: initialValue,
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ITEM':
      return {
        ...state,
        item: action.payload,
      }
    case 'ERROR':
      return {
        ...state,
        error: true,
      }
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        error: false,
        item: action.payload,
      }
    default:
      return state
  }
}

export default useLocalStorageWithReducer
