import React, {useState, useEffect} from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Genres from './Genres'
import Genre from './Genre'
import Shows from './Shows'
import NavBar from './NavBar'
import '../index.css'

export default function App() {

  const [genresData, setGenresData] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/genres')
      .then(res => res.json())
      .then(data => setGenresData(data))
  },[])

  const handleNewGenre = (newGenre) => {
      setGenresData(prevGenresData => [...prevGenresData, newGenre])
    
  }

  const handleNewShow = (newShowData) => {
      setGenresData(newShowData)
      
  }
  
  const handleShowEditUpdate = (editedShow) => {
    setGenresData(editedShow)
  }


const handleDeletedShow = (deletedShow) => {
  //console.log("deletedShow", deletedShow)
  const updatedGenresData = genresData.map(genre => {
    if(genre.id === deletedShow.genre_id) {
      const updatedShows = genre.shows.filter(show => show.id !== deletedShow.id)
      //console.log("updatedShow", updatedShows)
      
      return {
        ...genre,
        shows: updatedShows
      }
    }
    return genre
  })
  setGenresData(updatedGenresData)
}

  return (
   <>
   <div className='app-container'>
   <h1>TV Show Catalogue</h1>
   <NavBar />
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/genres' 
        element={
        <Genres 
        genresData={genresData} 
        handleNewGenre={handleNewGenre} />} 
        />
      <Route path='/genres/:id' element={<Genre />} />
      <Route path='/genres/:id/shows' 
        element={
        <Shows 
          genresData={genresData} 
          handleShowEditUpdate={handleShowEditUpdate} 
          handleNewShow={handleNewShow} 
          handleDeletedShow={handleDeletedShow} 
          />} />  
  </Routes>
  </div> 
   </>
  )
}
