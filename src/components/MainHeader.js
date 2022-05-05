import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';
import React from 'react';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              Login{' '}
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/register">
              Register{' '}
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/testingapp">
              users{' '}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
