import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Welcome from './components/login_form/Welcome';
import MainHeader from './components/MainHeader';
import Login from './components/login_form/Login';

import Register from './components/login_form/Register';


import TestingApp from './components/apiTesting/testingApp';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <MainHeader />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/testingapp" element={<TestingApp />} />
          </Routes>
        </main>
      </div>
    );
  }
}
