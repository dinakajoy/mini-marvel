import React, { useState, useRef, useCallback } from 'react';
import GetComics from './GetComics';
import Loader from '../common/Loader';
import './ComicsPage.css';

function ComicsSection() {
  const [format, setFormat] = useState('');
  const [offset, setOffset] = useState(0);

  const {isLoading, error, comics, hasMore} = GetComics(format, offset);

  // format date
  const getDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `Realeased On ${monthNames[new Date(date).getMonth()]} ${new Date(date).getDay()}, ${new Date(date).getFullYear()}`;
  }

  const observer = useRef();
  const lastComicsElementRef = useCallback(node => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setOffset(prevOffset => prevOffset + 1)
      }
    })
    if(node) observer.current.observe(node)
  }, [isLoading, hasMore]);

  const handleFormat = (e) => {
    setFormat(e.target.value);
    setOffset(0);
  }
  // Lazy Load Images
  const images = document.querySelectorAll('[data-src]');
  function preloadImages(img) {
    const src = img.getAttribute('data-src');
    if(!src) return;
    img.src = src;
  };
  const imgOptions = {
    threshold: 100
  };
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      } else {
        preloadImages(entry.target);
        imgObserver.unobserve(entry.target);
      }
    }, imgOptions);
  });
  images.forEach(image => {
    imgObserver.observe(image);
  })

  return (
    <main>
      <section className="comicspage">
        <select className="comics-order" value={format} onChange={handleFormat}>
          <option  style={{padding: '10px'}}>--Order By Realese Date</option>
          <option value="ASC" style={{padding: '10px'}}>ASC</option>
          <option value="DESC"  style={{padding: '10px'}}>DESC</option>
        </select>
        <div className="comicspage-wrapper">
    
          {comics && comics.map((comic, index) => {
            if(index + 1) {
              return (
                <div ref={lastComicsElementRef} key={index}>
                  <div key={comic.id} className="comicspage-details">
                    <img data-src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                    <div className="comicspage-title">
                      <h2>{comic.title}</h2>
                      <p>{getDate(comic.modified)}</p>
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <div key={comic.id} className="comicspage-details">
                  <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                  <div className="comicspage-title">
                    <h2>{comic.title}</h2>
                    <p>{getDate(comic.modified)}</p>
                  </div>
                </div>
              )
            }
          })}

          <div>{ isLoading && <Loader /> }</div>
          <div>{error && 'Sorry, There Was An Error!!!'}</div>
        </div>
      </section>
    </main>
  );
}

export default ComicsSection;
