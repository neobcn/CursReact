import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Inici from '../../vistes/Inici';
import Seccions from '../../vistes/Seccions';

const seccions = [];
for ( let i = 1; i <= 20; i++ ) {
    seccions.push({
        id: i,
        label: `Secció ${i}`,
    });
}

const Navegacio = () => {
    return (
        <Fragment>
            <div className="row">
                <Switch>
                    <Route path="/seccions">
                      <Seccions seccions={seccions} />
                    </Route>
                    <Route path="/inici">
                      <Inici />
                    </Route>
                    <Route path="/">
                      <Inici />
                    </Route>             */}
                </Switch>
            </div>
        </Fragment>    
    )
}

export default Navegacio