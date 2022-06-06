import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="main-nav">
            <div className="nav-section">
                <div className="profile-container">
                    <img src="img/glen_burchfield_profile_picture.jpg" alt="Glen Burchfield Profile Picture" />
                </div>
            </div>
            <div className="nav-section">
                <Link to="/home">Home</Link>
                <Link to="/pilot">Pilot</Link>
            </div>
            <div className="nav-section">

            </div>
        </nav>
    );
}

export default Nav