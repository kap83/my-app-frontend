import React, { useState, useEffect } from 'react';
import '../index.css'
import TVShows from './TVShows';

function App() {

  const [shows, setShows] = useState([])
  console.log(shows)
  
  useEffect(()=> {
    fetch("http://localhost:3000/shows")
    .then(res => res.json())
    .then(showData => setShows(showData)
    )
  }, [])

    // eslint-disable-next-line
 const handleShowStateUpdate = (addedShow) => {
  setShows(addedShow)
}


return (
    <div className="app-container">
    {/* <h1>TV Show Catalogue</h1> */}
      {shows && <TVShows shows={shows} handleShowStateUpdate={handleShowStateUpdate} />}
    </div>
  );
}

export default App;
