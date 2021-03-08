import React from 'react';
import './HomePage.css';

function MarvelHQSection() {
  return (
    <section className="lightbg">
      <div className="marvelHQSection">
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/marvelhq.jpg`} alt="Marvel" />
        </div>
        <div className="marvelHQSection-details">
          <p>Marvel HQ</p>
          <h3>Play games and read comics on MarvelHQ.com</h3>
          <button className="red-button">CHECK IT OUT!</button>
        </div>
      </div>
    </section>
  );
}

export default MarvelHQSection;
