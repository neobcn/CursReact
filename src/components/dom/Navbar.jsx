import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/inici" className="nav-link">
                                    Inici
                                </NavLink>                                
                            </li>
                            <li className="nav-item">
                                <NavLink to="/fundaments" className="nav-link">
                                    Fundaments
                                </NavLink>
                            </li>  
                            <li className="nav-item">
                                <NavLink to="/seccions" className="nav-link">
                                    Seccions
                                </NavLink>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>        
        </Fragment>
  )
}

export default Navbar;