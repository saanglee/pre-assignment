import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Layout from './Layout';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="main" element={<Main />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
