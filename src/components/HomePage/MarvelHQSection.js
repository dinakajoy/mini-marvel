import React from 'react';
import './HomePage.css';

function MarvelHQSection() {
  return (
    <section className="marvelHQSection">
    <div>
      <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelhq-promos-modules-featured-half-dsk-01.jpg" alt="Marvel" />
    </div>
    <div>
      <p>Marvel HQ</p>
      <h3>Play games and read comics on MarvelHQ.com</h3>
      <button className="red-button">CHECK IT OUT!</button>
    </div>
    </section>
  );
}

export default MarvelHQSection;
