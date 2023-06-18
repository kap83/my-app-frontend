import React, { useState, useEffect } from 'react';
import '../index.css'
import TVShows from './TVShows';

function App() {

  const [shows, setShows] = useState([])
  console.log("shows", shows)
  
  useEffect(()=> {
    fetch("http://localhost:3000/shows")
    .then(res => res.json())
    .then(showData => setShows(showData)
    )
  }, [])

    // eslint-disable-next-line
 const handleAddedShow = (addedShow) => {
  // console.log("addedshow", addedShow)
  setShows(shows => [addedShow, ...shows])
}

const handleShowEdit = (editedShow) => {
  const indexOfShowToEdit = shows.findIndex(show => show.id === editedShow.id)
  const copyOfShows = [...shows]
  copyOfShows[indexOfShowToEdit] = editedShow
  console.log("copyofshows", copyOfShows)
  setShows(copyOfShows)
  
}

const handleUpdatedDelArray = (deletedShow) => {
  setShows(deletedShow)
}

return (
    <div className="app-container">
    {/* <h1>TV Show Catalogue</h1> */}
      {shows && <TVShows shows={shows} handleShowEdit={handleShowEdit} handleAddedShow={handleAddedShow} handleUpdatedDelArray ={handleUpdatedDelArray} />}
    </div>
  );
}

export default App;
