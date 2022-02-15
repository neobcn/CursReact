import React, { Fragment } from 'react'

const Events = () => {

    const eventClick = () => {
        alert('Has fet clic al botó');            
    }

    return (
        <Fragment>
            <hr />
            <h2>Exemple d'Events "Clic a un botó"</h2>
            <button onClick={ () => eventClick() }>Clicar per obrir alert</button>
        </Fragment>
    )
}

export default Events