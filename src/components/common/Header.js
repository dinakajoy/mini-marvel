import React from 'react';
import largeLogo from '../../images/logo.png';
// import smallLogo from '../../images/icon.png';
import NavBar from './NavBar';
import './Common.css';

function Header() {
  return (
    <header className="App-header">
      <NavBar />
      <img src={largeLogo} alt="Marvel" />
      <i className="fa fa-search" style={{fontSize:'20px', fontWeight:'lighter'}}></i>
    </header>
  );
}

export default Header;