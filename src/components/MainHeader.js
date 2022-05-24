import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import React from 'react';

import { useAuth } from '../components/login_form/Utils/auth';

const MainHeader = () => {
  const auth = useAuth();

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {!auth.user && (
            <li>
              <NavLink activeClassName={classes.active} to="/login">
                Login{' '}
              </NavLink>
            </li>
          )}

          <li>
            <NavLink activeClassName={classes.active} to="/register">
              Register{' '}
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/testingapp">
              Users{' '}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome{' '}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
