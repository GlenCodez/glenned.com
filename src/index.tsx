import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App';
import './assets/styles/index.css';
import Blog from "./pages/Blog/Blog";
import Budget from "./pages/Budget/Budget";
import Home from "./pages/Home/Home";
import store from "./store/store"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
  </React.StrictMode>
);
