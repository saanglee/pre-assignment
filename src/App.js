import React, { useState, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Main />
    </div>
  );
}

export default App;
