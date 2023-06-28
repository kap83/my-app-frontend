import React, {useState, useEffect} from 'react'
import { Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Genres from './Genres'
import Genre from './Genre'
import Shows from './Shows'

export default function App() {

 
  const [genresData, setGenresData] = useState([])


  useEffect(() => {
      fetch('http://localhost:9292/genres')
      .then(res => res.json())
      .then(data => setGenresData(data))
  },[])

  const handleNewGenre = (newGenre) => {
      setGenresData([...genresData, newGenre])
    
  }
  
  const handleNewShow = (newShow) => {
    setGenresData(newShow)
  }


const handleDeletedShow = (deletedShow) => {
  const IndexOfShowToDelete = genresData.findIndex(genre => genre.id === deletedShow)
  const copyOfGenresData = [...genresData]
  copyOfGenresData.splice(IndexOfShowToDelete, 1)
  setGenresData(copyOfGenresData)
}

  return (
   <>
    
   <h1>TV Show Catalogue</h1>
   <nav>
      <ul>
        <li><Link to='/'>HOME</Link> </li>
        <li><Link to='/genres'>GENRES</Link></li>
      </ul>
    </nav>
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/genres' element={<Genres genresData={genresData} handleNewGenre={handleNewGenre} />} />
      <Route path='/genres/:id' element={<Genre />} />
      <Route path='/genres/:id/shows' element={<Shows genresData={genresData} handleNewShow={handleNewShow} handleDeletedShow={handleDeletedShow} />} />  
  </Routes>

    {/* <Routes >
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/addnewshow" element={<AddNewShow />} />
    </Routes>
    <Routes>
        <Route path='/genres'/>
          <Route index element={<Genres genresData={genresData} />} />
          <Route path=':id' element={<Genre handleDeletedGenre={handleDeletedGenre}/>}/>
          <Route path='/genres/:id/shows' element={<Shows genresData={genresData} handleGenresDataUpdate={handleGenresDataUpdate} handleDeletedShow={handleDeletedShow} />} />
          
    </Routes> */}
   </>
  )
}
