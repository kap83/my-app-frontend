// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import {Route, Routes} from "react-router-dom"
import '../index.css';
// eslint-disable-next-line
import TVShows from './TVShows';
import NavBar from './NavBar';
import Form from './Form'



function App() {
  //eslint-disable-next-line
  const [shows, setShows] = useState([])  


  useEffect(()=> {
    fetch("http://localhost:9292/shows")
    .then(res => res.json())
    .then(responseData => {
      const showsData = responseData.map(show => show)
      setShows(showsData)
    })
  }, [])

  return (
    <div className="app">
    <h1>TV Show Catalogue</h1>
    <NavBar  />
    <Routes>
      <Route path='/' element={<TVShows shows={shows}/>} />
      <Route path='/form' element={<Form />} />
    </Routes>

     
      
    </div>
  );
}

export default App;
