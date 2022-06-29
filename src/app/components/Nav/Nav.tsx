import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";
import {AiOutlineCalendar} from "react-icons/ai";
import {VscFilePdf} from "react-icons/vsc";

function Nav() {
    return (
        <nav className="main-nav">
            <div className="nav-section">
                <div className="profile-container">
                    <img src="img/glen_burchfield_profile_picture.jpg" alt="Glen Burchfield Profile Picture" />
                </div>
            </div>
            <div className="nav-section nav-link-menu">
                <Link to="/home">Home</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div className="nav-section nav-btn-grp">
                <a className="nav-button" href="app/components/Nav/Nav#">Resume <VscFilePdf className="nav-icon"/></a>
                <a className="nav-button" href="app/components/Nav/Nav#">Book <AiOutlineCalendar className="nav-icon" /></a>
                <Link to="/budget" className="nav-button">Budget</Link>
            </div>
        </nav>
    );
}

export default Nav