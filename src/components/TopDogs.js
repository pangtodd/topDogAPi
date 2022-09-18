import React, { useEffect, useState } from 'react';

function TopDogs(){
  const [error, setError]= useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topDogs, setTopDogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/pets`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
          setTopDogs(jsonifiedResponse)
          setIsLoaded(true)
        })
      .catch((error) => {
        setError(error.message)
        setIsLoaded(true)
      });
    }, [])

    if (error) {
      return <h1>Error: {error}</h1>;
    } else if (!isLoaded){
      return <h1>...loading...</h1>;
    } else {
      return (
      <React.Fragment>
        <h1> Top rescues </h1>
        <ul>
          {topDogs.map((dog, index) =>
          <li key={index}>
            <h3>{dog.name}</h3>
            <p>{dog.animal_type} ({dog.breed})</p>
            <p>about {dog.name}: "{dog.comments}"</p>
          </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}


export default TopDogs;