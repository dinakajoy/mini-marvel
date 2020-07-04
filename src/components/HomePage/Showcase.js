import React from 'react';
import './HomePage.css';

function Showcase() {
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
        <a href="#home">Overview</a>
        <a href="#news">In Comics Profile</a>
        <a href="#contact">In Comics Full Report</a>
      </div>
    </>
  );
}

export default Showcase;
