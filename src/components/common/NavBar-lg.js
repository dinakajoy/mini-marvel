import React from 'react';
import {NavLink} from 'react-router-dom';
import './Common.css';

function NavBar() {
  return (
    <div id="nav" className="nav">
      <NavLink exact to="/" activeClassName="active-navlink">Home</NavLink>
      <NavLink to="/comics" activeClassName="active-navlink">Comics</NavLink>
      <NavLink to="/comics-issues" activeClassName="active-navlink">Comics Issues</NavLink>
    </div>
  );
}

export default NavBar;