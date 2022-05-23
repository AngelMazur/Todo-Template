import React from 'react'

const EmptyResult = ({searchText}) => {
  return (
    <>
    <section className='EmptyResult'>
      <p>No hay resultados para {searchText}</p>
    </section>
    </>
  )
}

export default EmptyResult

//TODO: Estilar componente