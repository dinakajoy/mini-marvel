import React, { useEffect } from 'react';
import NavBar from './NavBar';
import NavBarLg from './NavBar-lg';
import './Common.css';

const Header = () => {
  let logoSrc = document.getElementById('logo');
  let logoSrc2 = document.getElementById('logo2');
  let prevScrollpos = window.pageYOffset;

  useEffect(() => {
    window.addEventListener('scroll', resetLogoSrc);
  }, [logoSrc, logoSrc2]);

  const resetLogoSrc = () => {
    let logoSrc = document.getElementById('logo');
    let logoSrc2 = document.getElementById('logo2');
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition !== 0) {
      logoSrc.width = '50';
      logoSrc2.width = '50';
      logoSrc.src = '/icon.png';
      logoSrc2.src = '/icon.png';
    } else {
      logoSrc.width = '150';
      logoSrc2.width = '150';
      logoSrc.src = '/logo.png';
      logoSrc2.src = '/logo.png';
    }
  };
  
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    let header = document.querySelector(".App-header");
    window.addEventListener('scroll', () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
      } else {
        header.style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
    })
  }, [prevScrollpos]);

  return (
    <header className="App-header">
      <div className="sm-nav">
        <NavBar />
        <img src='/logo.png' id="logo" className="logo" alt="Marvel" />
        <i className="fa fa-search" style={{fontSize:'20px', fontWeight:'lighter'}}></i>
      </div>
      <div className="lg-nav">
        <div className="header-wrapper1">
          <div class="auth"><a href="#">SIGN IN</a> <span>|</span> <a href="#">JOIN</a></div>
          <div className="img"><img src='/logo.png' id="logo2" className="logo" alt="Marvel" /></div>
          <div class="mastercard-wrapper">
            <img src={`${process.env.PUBLIC_URL}/images/mastercard.jpg`} alt="Marvel"/>
            <i className="fa fa-search lg-search" style={{fontSize:'20px', fontWeight:'lighter'}}></i>
          </div>
        </div>
        <div className="header-wrapper2">
          <NavBarLg />
        </div>
      </div>
    </header>
  );
}

export default Header;