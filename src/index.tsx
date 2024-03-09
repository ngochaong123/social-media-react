import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./Components/Login/Login";
import Menu from "./Components/menuMain/Menu";
import Chat from "./Components/Chat/chat";
import Infor from "./Components/InfoUser/user";
import NotFoundPage from "./Components/Pages 404/NotFoundPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path='/Menu/Chat' element={<Chat />} /> 
        <Route path='/Menu/User' element={<Infor />} /> 
        <Route path='*' element={<NotFoundPage />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
