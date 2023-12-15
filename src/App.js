// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import Forgot from './components//Forgot';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/login-signup" element={<LoginSignup />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
