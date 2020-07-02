import React from 'react';
import largeLogo from '../../images/logo-lg.png';
// import smallLogo from '../../images/logo-sm.png';
import './Common.css';

function Header() {
  return (
    <header className="App-header">
      <img src={largeLogo} alt="Marvel" />
    </header>
  );
}

export default Header;