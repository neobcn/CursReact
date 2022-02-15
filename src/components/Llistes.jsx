import React, { Fragment, useState } from 'react'

const Llistes = () => {

    const estatInicial = [
        {
            id: 1,
            text: 'Tasca 1'
        },
        {
            id: 2,
            text: 'Treball 2'
        },
        {
            id: 3,
            text: 'Tasca 3'
        },
        {
            id: 4,
            text: 'Treball 4'
        },
        {
            id: 5,
            text: 'Tasca 5'
        },
    ];    

    const [llista, setLlista] = useState(estatInicial);

    const treballs = llista.filter( (item) => {return item.text.indexOf('Tasca') === -1 } )

    return (
        <Fragment>
            <h2>Exemple de Llistes</h2>
            {
                llista.map( (item) => (
                    <h4 key={item.id}>{item.text}</h4>
                ))
            }
            <h2>Exemple de Filtre "Treball"</h2>
            {
                treballs.map((treball) => (
                    <h4 key={treball.id}>{treball.text}</h4>
                ))
            }
        </Fragment>
    )
}

export default Llistes