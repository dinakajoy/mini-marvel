import React from 'react';
import Showcase from './Showcase';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import LatestVideoSection from './LatestVideoSection';
import ComicsSection from './ComicsSection';
import MarvelHQSection from './MarvelHQSection';
import './HomePage.css';

function HomePage() {
  return (
    <main>
      <Showcase />
      <section className="follow">
        <div>Follow: </div>
        <span>
          <i className="fa fa-facebook-official"></i>
          <i className="fa fa-twitter"></i>
        </span>
      </section>
      <AboutSection />
      <BlogSection />
      <LatestVideoSection />
      <ComicsSection />
      <MarvelHQSection />
    </main>
  );
}

export default HomePage;
