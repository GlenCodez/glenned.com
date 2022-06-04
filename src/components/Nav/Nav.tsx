import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="main-nav">
            <div className="profile-container">
                <img src="img/glen_burchfield_profile_picture.jpg" alt="Glen Burchfield Profile Picture" />
            </div>
            <Link to="/home">Home</Link>
            <Link to="/pilot">Pilot</Link>
        </nav>
    );
}

export default Nav