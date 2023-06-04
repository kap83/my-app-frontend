import React, {useState, useEffect} from 'react';
import '../index.css'
import TVShows from './TVShows';

function App() {
  //eslint-disable-next-line
  const [shows, setShows] = useState([])  


  useEffect(()=> {
    fetch("http://localhost:9292/shows")
    .then(res => res.json())
    .then( showData => setShows(showData)
    )
  }, [])

return (
    <div className="app">
    <h1>TV Show Catalogue</h1>
      {shows && <TVShows shows={shows} />}
    </div>
  );
}

export default App;
