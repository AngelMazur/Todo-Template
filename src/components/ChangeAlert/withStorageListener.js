import React from 'react'
import { useState } from 'react'

const withStorageListener = (WrappedComponent) => {
  return function WrappComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false)

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en el storage')
        setStorageChange(true)
      }
    })

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={setStorageChange}
      />
    )
  }
}
export default withStorageListener
