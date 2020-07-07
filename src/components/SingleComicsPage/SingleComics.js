import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";
import Loader from '../common/Loader';
import './SingleComicsPage.css';

function SingleComics({ match }) {
  let {comicId} = match.params;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [comic, setComic] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://gateway.marvel.com/v1/public/comics/${comicId}?apikey=${REACT_APP_API_KEY}`);
      res
        .json()
        .then(res => {
          console.log(res.data.results);
          setComic(res.data.results);
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          setError(true);
        })
    }
    fetchData();
  }, [comicId]);

  // format date
  const getDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `Realeased On ${monthNames[new Date(date).getMonth()]} ${new Date(date).getDay()}, ${new Date(date).getFullYear()}`;
  }

  return (
    <section className="comic">
      {comic.length > 0 && <div key={comic[0].id} className="comicspage-details">
        <div className="comic-img" style={{backgroundImage: `url(${comic[0].thumbnail.path}.${comic[0].thumbnail.extension})`}}></div>
        <div className="comic-title">
          <div>
            <img className="comicDetail-img" src={`${comic[0].images[0].path}.${comic[0].images[0].extension}`} alt={comic[0].title} />
          </div>
          <div>
            <h2>{comic[0].title}</h2>
            <p>{getDate(comic[0].modified)}</p>
            <p>Issue Number: {comic[0].issueNumber}</p>
            <p>Category: {comic[0].format}</p>
            <p>Price: {comic[0].prices[0].price}</p>
            Created By: <br />{comic[0].creators.items.map(creator => <h3>{creator.name}</h3>)}
          </div>
        </div>
      </div>}

      <div>{ isLoading && <Loader /> }</div>
      <div>{error && 'Sorry, There Was An Error!!!'}</div>
    </section>
  );
}

export default withRouter(SingleComics);