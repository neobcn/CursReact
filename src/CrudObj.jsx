import { Fragment } from "react/cjs/react.production.min";
import App from "./App";
import { nanoid } from "nanoid";
import { useState } from "react";

function CrudObj(){

    const crud = {
        modeEdicio: false,
        error: false,
        exit: false,
        failure: {
            accioDesconeguda: 'Acció desconeguda',
            nomTasca: 'El nom de la tasca no pot ser buit',
        },
        success: {
            postTasca: "La nova tasca s'ha agregat correctament",
            putTasca: "La tasca s'ha actualitzat correctament",
            deleteTasca: "La tasca s'ha eliminat correctament",   
        },
    }

    const tascaDefault = {
        id: null,
        nom: '',            
    }

    const [tasca, setTasca] = useState(tascaDefault);
    const [tasques, setTasques] = useState([]);
    const [alerta, setAlerta] = useState('');
    const [resultat, setResultat] = useState('');
    const [modeEdicio, setModeEdicio] = useState(crud.modeEdicio);  
    const [error, setError] = useState(crud.error);
    const [exit, setExit] = useState(crud.exit);    

    const checkFormulari = e => {
        e.preventDefault();
        
        // Error: tasca amb nom buit
        if ( tasca.nom.trim() === '' ) {
            setError(true);               
            setAlerta(crud.failure.nomTasca);  
            // setTimeout(() => {setError(false)}, 1500);   
        } else {
            if ( modeEdicio ) {
                actualitzarTasca(tasca);
            } else {
                agregarTasca(tasca);
            }     
        }
    }

    const agregarTasca = item => {
        let c = {id: nanoid(), nom: tasca.nom}
        setTasques([
            ...tasques,
            c
        ])
        setResultat(crud.success.postTasca);
        setExit(true);
        setTimeout(() => {setExit(false)}, 1500);
        setTasca(tascaDefault);
    }

    const actualitzarTasca = item => {
        setTasques(tasques.map(item => item.id === tasca.id ? tasca : item));
        setResultat(crud.success.putTasca);
        setExit(true); 
        setTimeout(() => {setExit(false)}, 1500);
        setTasca(tascaDefault);
        setModeEdicio(false);
    }

    const editarTasca = item => {
        setTasca(item);
        setModeEdicio(true);
    }

    const eliminarTasca = id => {
        setTasques(tasques.filter(item => item.id !== id));
        setResultat(crud.success.deleteTasca);
    }

    const reiniciarFormulari = () => {
        setExit(false);
        setError(false);
    }

    return (
        <Fragment>
            <div className="container mt-5 mb-50">
                <div className="row">
                    <div className="col-6">
                        <h1>Crud de tasques v.2 </h1>
                        <h2>Utilitzant objectes</h2>
                    </div>
                    <div className="col-6">
                    <h3>Formulari</h3>
                        <form onSubmit={ checkFormulari }>                            
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
                        </form>

                        <div className="alert alert-danger mt-2" hidden={error===false} aria-hidden={error===false}>
                            {[alerta]}
                        </div>
                        <div className="alert alert-success mt-2" hidden={exit===false} aria-hidden={exit===false}>
                            {[resultat]}
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        /**
                         * Llistat de tasques generades
                         */
                    }
                    <div className="col-12">
                        <h3>Llista de tasques</h3>
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
                </div>
            </div>
        </Fragment>
    )
}

export default CrudObj;