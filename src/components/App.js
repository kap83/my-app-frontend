import React, {useState, useEffect} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Genres from './Genres'
import Genre from './Genre'
import Shows from './Shows'

export default function App() {

  // eslint-disable-next-line
  const [genresData, setGenresData] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/genres')
      .then(res => res.json())
      .then(data => setGenresData(data))
  },[])

  //console.log("in App genresData", genresData)

  return (
   <>
    <Routes location="/">
      <Route path="/" element={<Home />} />
    </Routes>
    <nav>
      <h2><Link to='/genres'>GENRES</Link></h2>
    </nav>
    <Routes>
      <Route path='/genres' element={<Genres genresData={genresData} />} />
      <Route path=':id' element={<Genre />} />
      <Route path='genres/:id/shows' element={<Shows genresData={genresData} />} />
    </Routes>
   </>
  )
}
