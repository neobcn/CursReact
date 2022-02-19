import { Fragment } from "react/cjs/react.production.min";
import App from "./App";
import { nanoid } from "nanoid";
import { useState } from "react";

function Crud(){

    const tascaDefault = {id:null,nom:''}

    const [falta, setFalta] = useState('')
    const [error, setError] = useState(false)
    const [exit, setExit] = useState(false)
    const [resultat, setResultat] = useState('')
    

    const [modeEdicio, setModeEdicio] = useState(false)    
    const [tasques, setTasques] = useState([])
    const [tasca, setTasca] = useState(tascaDefault)

    console.log({
        log: 'onload',
        tasca,
        bool: ( tasca.nom.trim() === '' )
    });

    const validarFormulari = (e) => {
        e.preventDefault();
        setExit(false)

        if ( tasca.nom.trim() === '' ) {
            setError(true);
            setFalta("El camp tasca no pot estar buit.");
        } else {
            // Si no hi ha error
            if ( error === false ) {

                // Si estem editant
                if ( modeEdicio ) {
                    setTasques(tasques.map(item => item.id === tasca.id ? tasca : item)) 
                    setResultat("Tasca actualitzada correctament")
                }
                // Sino, si estem agregant
                else {
                    let c = {id: nanoid(), nom: tasca.nom}
                    setTasques([
                        ...tasques,
                        c
                    ])
                    // e.target.reset()  
                    setResultat("Tasca creada correctament")              
                }
                // Reiniciem formulari i defaults 
                setModeEdicio(false)           
                setTasca(tascaDefault)
                setExit(true)
            }
        }        
    }

    const editarTasca = item => {
        setModeEdicio(true)
        setTasca(item)
    }

    const eliminarTasca = id => {
        setTasques(tasques.filter(item => item.id !== id))
    }

    const reiniciarFormulari = () => {
        setExit(false)
        setError(false)
    }

    return (
        <Fragment>
            <div className="container mt-5 mb-50">
                <h1 className="text-center">
                    Crud amb React
                </h1>
                <div className="row">
                    <div className="col-8">
                        <h2>Llista de tasques</h2>
                        <ul className="list-group">
                            {
                                tasques.map((item, index) => (
                                    
                                    <li className="list-group-item" key={index}>
                                        <span className="lead" title={item.id}>
                                            {item.nom} 
                                        </span>
                                        
                                        <button 
                                            className="btn btn-danger btn-sm float-end mx-2" 
                                            onClick={ () => eliminarTasca(item.id)}
                                        >
                                        Eliminar
                                        </button>
                                        
                                        <button 
                                            className="btn btn-warning btn-sm float-end" 
                                            onClick={ () => editarTasca(item)}
                                        >
                                        Editar
                                        </button>

                                    </li>

                                ))
                            }
                            
                        </ul>
                    </div>
                    <div className="col-4">
                        <h2>Formulari</h2>
                        <form onSubmit={ validarFormulari }>                            
                            <input 
                                type="text" 
                                className="form-control mb-2" 
                                placeholder="Defineix una tasca" 
                                onClick={reiniciarFormulari} 
                                onChange={ e => setTasca({id:tasca.id, nom:e.target.value}) } 
                                value={tasca.nom}
                            />
                            
                            {
                                modeEdicio 
                                ? (
                                <button 
                                    className="btn btn-warning form-control" 
                                    type="submit"
                                >
                                Actualitzar tasca
                                </button>
                                ) 
                                : (
                                <button 
                                    className="btn btn-success form-control" 
                                    type="submit"
                                >
                                Afegir tasca
                                </button>                                            
                                )
                            }
                            
                            
                            <div className="alert alert-danger mx-2" hidden={error===false} aria-hidden={error===false}>
                                {[falta]}
                            </div>
                            <div className="alert alert-success mx-2" hidden={exit===false} aria-hidden={exit===false}>
                                {[resultat]}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Crud;