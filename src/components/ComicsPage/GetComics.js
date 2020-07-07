import { useState, useEffect } from 'react';

function GetComics(format, offset) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    setComics([]);
  }, [format]);

  function sortByDateAsc(a, b){
    if(a.modified < b.modified){
      return -1;
    } else if(a.item > b.item){
      return 1;
    } else{
      return 0;
    } 
  }
  function sortByDateDesc(a, b){
    if(a.modified > b.modified){
      return -1;
    } else if(a.item < b.item){
      return 1;
    } else{
      return 0;
    } 
  }

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const title = 'Captain Marvel';
    fetch(`https://gateway.marvel.com/v1/public/comics?title=${title}&offset=${offset}&limit=20&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(res => {
        let re = res.data.results;
        setComics(prevComics => {
          if(format === 'ASC') {
            return [...new Set([...prevComics, ...re.sort(sortByDateAsc)])]
          } else if (format === 'DESC') {
            return [...new Set([...prevComics, ...re.sort(sortByDateDesc)])]
          } else {
            return [...new Set([...prevComics, ...re])]
          }
        })
        setHasMore(res.data.results.length > 0);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setError(true);
      })
  }, [format, offset]);
  return {isLoading, error, comics, hasMore};
}

export default GetComics;
