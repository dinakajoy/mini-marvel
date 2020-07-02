import React from 'react';
import './Common.css';

function NavBar() {
  const openNav = () => {
    document.getElementById("nav").style.width = "50%";
  }
  
  const closeNav = () => {
    document.getElementById("nav").style.width = "0%";
  }
  
  return (
    <>
      <div id="nav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay__content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <span className="openbtn" onClick={openNav}><i className="fa fa-reorder" style={{fontSize:'20px',fontWeight:'lighter',cursor:'pointer'}}></i></span>
    </>
  );
}

export default NavBar;