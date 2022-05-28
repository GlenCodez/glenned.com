import React from 'react';
import './Layout.css';
import Nav from "./Nav/Nav";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="Layout">
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout