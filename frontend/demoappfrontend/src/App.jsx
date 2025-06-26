import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Add_employee from './Pages/Add_employee';
import './App.css';
function App() {
  

  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add_employee" element={<Add_employee />} />
      </Routes>
    </>
  )
}

export default App
