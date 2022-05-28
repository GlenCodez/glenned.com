import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="main-nav">
            <Link to="/home">Home</Link>
            <Link to="/pilot">Pilot</Link>
        </nav>
    );
}

export default Nav