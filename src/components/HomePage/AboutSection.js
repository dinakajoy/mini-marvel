import React from 'react';
import './HomePage.css';

function AboutSection() {
  return (
    <section className="about-marvel">
      <div className="about-img"></div>
      <div className="about-details">
        <h2>Captain Marvel</h2>
        <p>Near death, Carol Danvers was transformed into a powerful warrior for the Kree. Now, returning to Earth years later, she must remember her past in order to to prevent a full invasion by shapeshifting aliens, the Skrulls.</p>
        <button className="red-button">WATCH NOW</button>
      </div>
    </section>
  );
}

export default AboutSection;
