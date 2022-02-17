import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'

export const Comentaris = (usuari) => {
  return (
    <Fragment>
        <div className="media">
            <img src={usuari.img} alt="Imatge de {usuari.nom}" className='mx-3' />
            <div className="media-body">
                <h5 className="mt-0">{usuari.nom} <span className='small'>({usuari.edat} anys)</span></h5>
                {usuari.comentari}
            </div>
        </div>
    </Fragment>
  )
}
