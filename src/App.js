import React, { useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App() {
  return (
    // <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
