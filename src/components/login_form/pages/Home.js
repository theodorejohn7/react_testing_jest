import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import 

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

// import React, { Suspense } from "react";
// const User = React.lazy(() => import("./Users"));
// const Admin = React.lazy(() => import("./Admin"));

//Instead of regular import statements, we will use the above approach for lazy loading

// export default (props) => {
// 	if (props.user === "admin") {
// 		return (
// 			// fallback component is rendered until our main component is loaded
// 			<Suspense fallback={<div>Loading Admin</div>}>
// 				<Admin />
// 			</Suspense>
// 		);
// 	} else if (props.user === "customer") {
// 		return (
// 			<Suspense fallback={<div>Loading User</div>}>
// 				<User />
// 			</Suspense>
// 		);
// 	} else {
// 		return <div> Invalid User </div>;
// 	}
// };
