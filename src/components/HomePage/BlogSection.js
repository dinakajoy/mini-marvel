import React from 'react';
import './HomePage.css';

function BlogSection() {
  return (
    <section className="blogSection">
      <h1>LATEST NEWS</h1>
      <div className="blogSection-wrapper">
        <div>
          <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/capmarv2019018006_col_card.jpg' alt="Marvel" />
          <div>
            <p>Comics</p>
            <h3>Artist Cory Smith Joins 'Captain Marvel' As Carol Danvers Enters as the Accuser</h3>
          </div>
        </div>
        <div>
          <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/captain-marvel-18_card.jpg' alt="Marvel" />
          <div>
            <p>Comics</p>
            <h3>A History of Accusers and Captain Marvel's New Role</h3>
          </div>
        </div>
        <div>
          <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/flerken.jpg' alt="Marvel" />
          <div>
            <p>Culture & Lifestyle</p>
            <h3>Peek Inside the Pages of ‘Beware the Flerken!’ With Writer Calliope Glass and Illustrator Rob McClurkan</h3>
          </div>
        </div>
        <div>
          <img src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/storytrailer.jpg' alt="Marvel" />
          <div>
            <p>Games</p>
            <h3>Marvel Games Comic Connection: MODOK</h3>
          </div>
        </div>
      </div>
      <div className="pagination">
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
