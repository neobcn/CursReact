import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';

const Inici = () => {
  console.log('Inici.jsx', useParams());
  return (
    <Fragment>
        <h1>Pàgina d'inici del projecte final del curs de React</h1>
    </Fragment>
  )
}

export default Inici