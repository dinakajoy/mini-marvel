import React from 'react';
import Showcase from '../common/Showcase';
import FollowSection from './FollowSection';
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
      <FollowSection />
      <AboutSection />
      <BlogSection />
      <LatestVideoSection />
      <ComicsSection />
      <MarvelHQSection />
    </main>
  );
}

export default HomePage;
