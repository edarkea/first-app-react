import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { Router, Route, Navigate, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import About from './components/About';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<UserList />} />
        <Route path={'/contacts/:id'} element={<UserDetails />} />
        <Route path={'/about'} element={<About/>} />
      </Routes>

    </React.Fragment>
  );
}

export default App;
