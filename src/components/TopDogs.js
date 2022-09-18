import React, { useEffect, useState } from 'react';

function TopDogs(){
  const [error, setError]= useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topDogs, setTopDogs]= useState([]);

  useEffect(() => {
    fetch(`localhost:3000/pets`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
          setTopStories(jsonifiedResponse.results)
          setIsLoaded(true)
        })
      .catch((error) => {
        setError(error)
        setIsLoaded(true)
      });
    }, [])
}


export default TopDogs;