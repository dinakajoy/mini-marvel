import React from 'react';
import {NavLink} from 'react-router-dom';
import './Common.css';

function FooterNav() {
  return (
    <>
      <div className="footerNavbar">
        <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
        <NavLink to="/comics" activeClassName="active-link">Comics</NavLink>
        <NavLink to="/comics-issues" activeClassName="active-link">Comics Issues</NavLink>
      </div>
    </>
  );
}

export default FooterNav;
