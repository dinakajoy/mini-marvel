import React, { useState, useEffect } from 'react';
import './HomePage.css';

function ComicsSection() {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const title = 'Captain Marvel';
    const res = await fetch(`https://gateway.marvel.com/v1/public/comics?title=${title}&apikey=${process.env.REACT_APP_API_KEY}`);
    res
      .json()
      .then(res => setComics(res.data.results))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <section className="comics">
      <h2>COMICS</h2>
      <div className="comics-wrapper">
      {isLoading && <p>Wait I'm Loading commics for you</p>}
      {comics && comics.map(comic => (
        <div key={comic.id} className="comics-details">
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
          <div className="comics-title">
            <h4>{comic.title}</h4>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default ComicsSection;
