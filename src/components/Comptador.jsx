import React from 'react'

const Comptador = () => {

    const [comptador, setComptador] = React.useState(0);    
    
    const reduir = () => {
        setComptador(comptador - 1);
    }

    const limit = 5;
    
    return (
        /**
         * Exemple d'event click amb dues opcions:
         * 1. En el primer botó crido directament a la funció de set 
         * 2. En el segon botó crido a la funció intermediària 
         */
        <React.Fragment>
            <div className="row">
                <h2>Exemple useState "Comptador"</h2>
                <h3>Comptador interactiu: {comptador}</h3>
                <div className='col'>
                    <button className="btn btn-success" onClick={ () => setComptador(comptador + 1) }>Comptador + 1</button> 
                </div>
                <div className='col'>
                    <button className="btn btn-danger" onClick={ () => reduir() }>Comptador - 1</button>
                </div>
            </div>
            <div className='row'>
                <h2>Exemple de ternari</h2>
                <h4>
                    {
                        "El comptador és " + ( comptador > limit ? " més gran que " + limit : " més petit que " + limit ) + 
                        " i " + ( comptador >= 0 ? "positiu" : "negatiu" )  
                    }
                </h4>
            </div>
        </React.Fragment>
    )
}

export default Comptador