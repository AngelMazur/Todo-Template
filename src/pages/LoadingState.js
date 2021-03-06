import React from 'react'

const LoadingState = () => {
  const loadingIcon = require('../Images/loading.png')
  return (
    <>
      <section className="LoadingState">
        <img src={loadingIcon} alt="loading" />
        <h2 className="LoadingState">Cargando...</h2>
      </section>
    </>
  )
}

export default LoadingState