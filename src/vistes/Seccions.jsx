import React, {Fragment} from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useParams } from 'react-router-dom';
import Seccio1 from '../vistes/seccions/Seccio1';
import Seccio from './Seccio';

const Seccions = ({seccions}) => {    
        
    console.log({
        log: 'Seccions',
        arg: seccions,
    });

    // const seccio = seccions.find( element => { return element.id });

    const components = {
        'Seccio1': Seccio1,
    };
    // const importarSeccio = seccio => lazy(() => import(`../vistes/seccions/${seccio}`).catch(() => import(`../vistes/errors/_404`)));
    
    const seccio = {};
    return (       
        <Fragment>
            <div className="row">                
                <div className="col-auto">
                    <ul className="list-unstyled">
                    {
                        seccions.map((item, index) => (
                            <li className="list-item" key={index}>
                                <Link to={`/seccions/seccio/${item.id}`}>
                                    {item.label}
                                </Link>
                            </li>                            
                        ))                        
                    }
                    </ul>
                </div>
                <div className="col">
                    <Switch>
                        <Route path="/seccions/seccio/:id">
                            <Seccio />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Fragment>
    )
}

export default Seccions