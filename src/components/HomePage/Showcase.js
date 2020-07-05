import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './HomePage.css';

function Showcase() {

  const checkNav = () => {
    const nav = document.querySelector('.showcaseNavbar');
    let bounding = nav.getBoundingClientRect();
    if (bounding.top <= 5) {
      nav.style.position = 'fixed';
      nav.style.bottom = '0';
    } else {
      nav.style.position = 'absolute';
      nav.style.bottom = '17%';
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
      <div className="showcaseNavbar">
        <NavLink to="/" activeClassName="active-link">Home</NavLink>
        <NavLink to="/comics" activeClassName="active-link">Comics</NavLink>
        <NavLink to="/comics-issues" activeClassName="active-link">Comics Issues</NavLink>
      </div>
    </>
  );
}

export default Showcase;
