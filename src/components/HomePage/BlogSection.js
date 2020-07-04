import React from 'react';
import './HomePage.css';

function BlogSection() {
  return (
    <section className="blogSection">
      <h1>LATEST NEWS</h1>
      <div className="blogSection-wrapper">
        <div>
          <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/captain-marvel-18_card.jpg' alt="Marvel" />
          <div>
            <p>Category One</p>
            <h3>My Title One</h3>
          </div>
        </div>
        <div>
          <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/flerken.jpg' alt="Marvel" />
          <div>
            <p>Category Two</p>
            <h3>My Title Two</h3>
          </div>
        </div>
        <div>
          <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/storytrailer.jpg' alt="Marvel" />
          <div>
            <p>Category Three</p>
            <h3>My Title Three</h3>
          </div>
        </div>
        <div>
          <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/stohl2.jpg' alt="Marvel" />
          <div>
            <p>Category Four</p>
            <h3>My Title Four</h3>
          </div>
        </div>
      </div>
      <div class="pagination">
        <a href="q">&laquo;</a>
        <a className="active" href="w">1</a>
        <a href="e">2</a>
        <a href="t">3</a>
        <a href="s">4</a>
        <a href="a">5</a>
        <a href="f">...</a>
        <a href="g">NEXT</a>
      </div>
    </section>
  );
}

export default BlogSection;
