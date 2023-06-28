import React, {useState, useEffect} from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Genres from './Genres'
import Genre from './Genre'
import Shows from './Shows'
import AddNewShow from './AddNewShow'

export default function App() {

 
  const [genresData, setGenresData] = useState([])

  useEffect(() => {
      fetch('http://localhost:9292/genres')
      .then(res => res.json())
      .then(data => setGenresData(data))
  },[])

  const handleGenresDataUpdate = (editedGenre) => {
    setGenresData(editedGenre)
  }
  
  const handleDeletedGenre = (deletedGenre) => {
  console.log(deletedGenre)
}


const handleDeletedShow = (deletedShow) => {
  const IndexOfShowToDelete = genresData.map(genre => console.log(genre.id))
  console.log("does it work?", IndexOfShowToDelete)
  // const copyOfGenresData = [...genresData]
  // copyOfGenresData.splice(IndexOfShowToDelete, 1)
}

  return (
   <>
    <Routes location="/">
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/newShow" element={<AddNewShow />} />
    </Routes>
    <Routes>
        <Route path='/genres'/>
          <Route index element={<Genres genresData={genresData} />} />
          <Route path=':id' element={<Genre handleDeletedGenre={handleDeletedGenre}/>}/>
        <Route path='genres/:id/shows' element={<Shows genresData={genresData} handleGenresDataUpdate={handleGenresDataUpdate} handleDeletedShow={handleDeletedShow} />} />
    </Routes>
   </>
  )
}
