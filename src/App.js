/* eslint-disable */

import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import Welcome from './components/login_form/Welcome';
import MainHeader from './components/MainHeader';
import Login from './components/login_form/Login';
import { RequireAuth } from './components/login_form/Utils/RequireAuth';
import Register from './components/login_form/Register';
import { AuthProvider } from './components/login_form/Utils/auth';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import lazyLoader from './components/lazyloading/LazyLoader';
const ApiLoad = lazyLoader(
  () => import('./components/apiTesting/testingApp'),
  'loading the component'
);

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <header>
            <MainHeader />
          </header>
          <ErrorBoundary>
            <main>
              <Routes>
                <Route path="/" />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/welcome"
                  element={
                    <RequireAuth>
                      {' '}
                      <Welcome />{' '}
                    </RequireAuth>
                  }                />
                <Route
                  path="/testingapp"
                  element={
                    <Suspense fallback={<h2>Component loading... </h2>}>
                      <ApiLoad />
                    </Suspense>
                  }
                />
              </Routes>
            </main>
          </ErrorBoundary>
        </div>
      </AuthProvider>
    );
  }
}
