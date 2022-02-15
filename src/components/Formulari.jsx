import React, { Fragment, useState } from 'react'

const Formulari = () => {

    let [falta, setFalta] = useState('')
    let [error, setError] = useState(false)
    const [curset, setCurset] = useState('')
    const [descripcio, setDescripcio] = useState('')

    const [llista_cursets, setLlistaCurset] = useState([])

    const validarFormulari = (e) => {
        e.preventDefault();

        if ( ! curset.trim() ) {
            setError(error = true);
            setFalta(falta += "El camp curset no pot estar buit.<br />");
        }

        if ( ! descripcio.trim() ) {
            setError(error = true);
            setFalta(falta += "El camp descripció no pot estar buit.<br />");
        }

        if ( ! error ) {
            let c = {curset,descripcio}
            setLlistaCurset([
                ...llista_cursets,
                c
            ])
            e.target.reset()
        }
    }

    return (
        <Fragment>
            <div className='row'>
            <h2>Exemple de Formulari</h2>
                {
                    /** Comentari JSX */
                }
                <form className="row g-3" onSubmit={validarFormulari}>
                    <div className='form-group'>
                        <label>Nom del curset</label>
                        <input
                            id="txt-curset"
                            type="text"
                            className='form-control'
                            onChange={ (e) => setCurset(e.target.value) }
                        />
                    </div>
                    {
                        /** Comentari JSX */
                    }
                    <div className='form-group'>
                        <label>Descripció del curset</label>
                        <input
                            id="txt-descripcio"
                            type="text"
                            className='form-control'
                            onChange={ (e) => setDescripcio(e.target.value) }
                        />
                    </div>
                    {
                        /** Comentari JSX */
                    }
                    <div className='form-group'>
                        <button className='btn btn-primary form-control' type={"submit"}>
                            Afegir
                        </button>
                    </div>

                    <div className="alert alert-danger" hidden={error===false} aria-hidden={error===false}>
                        {[falta]}
                    </div>

                </form>

            </div>

            <div className="row">
                <ul className="list list-group">
                    {
                        llista_cursets.map((item, index) => (
                            <li className="list-group-item" key={index}>
                                <strong>{item.curset}: </strong> <span className="small"> {item.descripcio} </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </Fragment>
    )
}

export default Formulari