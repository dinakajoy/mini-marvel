import React from 'react';
import {NavLink} from 'react-router-dom';
import './Common.css';

function NavBar() {
  const openNav = () => {
    if(window.innerWidth < 601) {
      document.getElementById("nav").style.width = "100%";
    } else {
      document.getElementById("nav").style.width = "50%";
    } 
  }
  
  const closeNav = () => {
    document.getElementById("nav").style.width = "0%";
  }

  return (
    <>
      <div id="nav" className="overlay">
        <span className="closebtn" onClick={closeNav}>&times;</span>
        <div className="overlay__content">
          <NavLink to="kk">About</NavLink>
          <NavLink to="ll">Services</NavLink>
          <NavLink to="mm">Clients</NavLink>
          <NavLink to="nn">Contact</NavLink>
        </div>
      </div>
      <span className="openbtn" onClick={openNav}><i className="fa fa-reorder" style={{fontSize:'20px',fontWeight:'lighter',cursor:'pointer'}}></i></span>
    </>
  );
}

export default NavBar;