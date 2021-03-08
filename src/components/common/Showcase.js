import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Common.css';

function Showcase() {

  const checkNav = () => {
    const navCtrl = document.querySelector('.ctrl-lg-footerNavbar');
    const nav = document.querySelector('.lg-footerNavbar');
    const bounding = navCtrl.getBoundingClientRect();
    if (bounding.top <= 6) {
      nav.style.position = 'fixed';
      nav.style.bottom = '0';
    } else if (bounding.top > 5) {
      nav.style.position = 'absolute';
      nav.style.bottom = '20%';
    }
  }
   
  useEffect(() => {
    window.addEventListener('scroll', checkNav);
  }, []);

  return (
    <>
      <section className="showcaseSection">
        <div className="showcase"></div>
        <div className="showcase__content">
          <small>CAROL DANVERS</small>
          <h1>CAPTAIN MARVEL</h1>
          <p>Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.</p>
        </div>
      </section>
      <div className="ctrl-lg-footerNavbar"></div>
      <div className="lg-footerNavbar">
        <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
        <NavLink to="/comics" activeClassName="active-link">Comics</NavLink>
        <NavLink to="/comics-issues" activeClassName="active-link">Comics Issues</NavLink>
      </div>
    </>
  );
}

export default Showcase;
