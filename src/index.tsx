import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Budget from "./pages/Budget";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/budget" element={<Budget />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
