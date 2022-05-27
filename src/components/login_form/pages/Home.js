import React, { Suspense } from 'react';
import { Route, Routes,Link, BrowserRouter } from 'react-router-dom';
 

const User = React.lazy(() => import('./Users'));
const Admin = React.lazy(() => import('./Admin'));

function Home() {
  return (
    <>
      <div>
        Welcome to Home Page <br /> <h3>Click your favourite color</h3>
      </div>

      <Suspense fallback={<h2>Component loading...</h2>}>
        <BrowserRouter>
          <div>
            <Link to="/ ">ADMIN</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/user">USER</Link>
          </div>
          <Routes>
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/user" element={<User />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default Home;

 