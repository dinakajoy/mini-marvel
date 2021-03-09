import React, { useState, useRef, useCallback } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from 'react-router-dom';
import GetComicsIssue from './GetComicIssues';
import Loader from '../common/Loader';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ComicsIssuePage.css';

function ComicsIssueSection() {
  const [format, setFormat] = useState('');
  const [offset, setOffset] = useState(0);

  const {isLoading, error, comicsIssues, hasMore} = GetComicsIssue(format, offset);

  // format date
  const getDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `Realeased On ${monthNames[new Date(date).getMonth()]} ${new Date(date).getDay()}, ${new Date(date).getFullYear()}`;
  }

  const observer = useRef();
  const lastComicsIssueElementRef = useCallback(node => {
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
    if(format === e.target.value) return;
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
    <>
      <section className="comicsIssuepage">

        {comicsIssues.length > 0 && <select className="comics-order" value={format} onChange={handleFormat}>
          <option>--Order By Realese Date</option>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>}

        <div className="comicsIssuepage-wrapper">
          {comicsIssues.length > 0 && comicsIssues.map((comicIssue, index) => {
            if(index + 1) {
              return (
                <div ref={lastComicsIssueElementRef} key={index}>
                  <Link to={`/comics/${comicIssue.id}`}>
                    <div key={comicIssue.id} className="comicsIssuepage-details">
                      <img data-src={`${comicIssue.thumbnail.path}.${comicIssue.thumbnail.extension}`} alt={comicIssue.title} width="100%" height="300px" />
                      <div className="comicsIssuepage-title">
                        <h2>{comicIssue.title}</h2>
                        <p>{getDate(comicIssue.modified)}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            } else {
              return (
                <Link to={`/comics/${comicIssue.id}`}>
                  <div key={comicIssue.id} className="comicsIssuepage-details">
                    <LazyLoadImage src={`${comicIssue.thumbnail.path}.${comicIssue.thumbnail.extension}`} alt={comicIssue.title} placeholder={`${process.env.PUBLIC_URL}/images/latest-vid3.jpg`} width="100%" height="300px" effect="blur" />
                    <div className="comicsIssuepage-title">
                      <h2>{comicIssue.title}</h2>
                      <p>{getDate(comicIssue.modified)}</p>
                    </div>
                  </div>
                </Link>
              )
            }
          })}

          <div>{ isLoading && <Loader /> }</div>
          <div>{error && 'Sorry, There Was An Error!!!'}</div>
        </div>
      </section>
    </>
  );
}

export default ComicsIssueSection;
