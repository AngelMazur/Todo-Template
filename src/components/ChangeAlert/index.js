import React from 'react'
import withStorageListener from './withStorageListener'

//STYLES
import './ChangeAlert.style.css'

const ChangeAlert = ({ toggleShow, show }) => {
  const refresh = () => {
    window.location.reload()
    toggleShow(false)
  }
  if(show){
    return (
        <div className="ChangeAlert-bg">
            <div className="ChangeAlert-container">
            <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
            <p>¿Quieres sincronizar tus TODOs?</p>
            <button
                className="TodoForm-button TodoForm-button--add"
                onClick={() => refresh()}
            >
                Yes!
            </button>
            </div>
        </div>
    );
} else{
    return null;
}
}
const ChangleAlertWithStorageListener = withStorageListener(ChangeAlert)

export default ChangleAlertWithStorageListener
