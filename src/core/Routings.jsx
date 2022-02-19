import React from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from '../components/dom/Navbar';
import Navegacio from '../components/dom/Navegacio';

function Routings() { 
    return (
        <Router>
            <Navbar />
            <Navegacio  />
        </Router>
    );
}

export default Routings;