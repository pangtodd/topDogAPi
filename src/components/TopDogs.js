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
        {/* <h1>hi!</h1> */}
        <h1> Top Dogs </h1>
        <ul>
          <li>topDogs[0].name</li>
          {topDogs.map((dog, index) =>
          <li key={index}>
            <h3>{dog.name}</h3>
            <h3>{dog.animal_type}</h3>
          </li>
          )}
        </ul>
      </React.Fragment>
    );
  }
}


export default TopDogs;