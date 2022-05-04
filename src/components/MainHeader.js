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
            <NavLink activeClassName={classes.active} to="/todoapp">
              TodoApp{' '}
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/usecontextapp">
              Toogle Color{' '}
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/datafetching">
              Data Fetching{' '}
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/hocapp">
              HOC App
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/eventbubblingapp">
              Event App
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/fileuploadapp">
              File Upload 
            </NavLink>
          </li>
          

          <li>
            <NavLink activeClassName={classes.active} to="/test">
              Counter{' '}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
