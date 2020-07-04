import React, { useEffect } from 'react';
import NavBar from './NavBar';
import './Common.css';

const Header = () => {
  let logoSrc = document.getElementById('logo');
  let prevScrollpos = window.pageYOffset;

  useEffect(() => {
    window.addEventListener('scroll', resetLogoSrc);
  }, [logoSrc]);

  const resetLogoSrc = () => {
    let logoSrc = document.getElementById('logo');
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition !== 0) {
      logoSrc.width = '50';
      logoSrc.src = '/icon.png';
    } else {
      logoSrc.width = '150';
      logoSrc.src = '/logo.png';
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
      <NavBar />
      <img src='/logo.png' id="logo" className="logo" alt="Marvel" />
      <i className="fa fa-search" style={{fontSize:'20px', fontWeight:'lighter'}}></i>
    </header>
  );
}

export default Header;