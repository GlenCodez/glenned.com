import React from 'react';
import './assets/styles/App.css';
import Nav from "./components/Nav/Nav";
import {Outlet} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
  );
}

export default App;
