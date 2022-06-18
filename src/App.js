import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Header from './components/Header';
import Feeds from './components/Feeds';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Feeds />
    </div>
  );
}

export default App;
