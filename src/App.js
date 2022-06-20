import React, { useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
