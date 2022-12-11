import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RegisterForm from './Pages/register_form/register_form';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './Pages/main_page/main_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="home" element={<MainPage/>}/>
      <Route path="register" element={<RegisterForm />}/>
    </Routes>
  </BrowserRouter>
);


