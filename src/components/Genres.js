import React from 'react'
import Genre from './Genre'
import AddNewGenre from './AddNewGenre'


export default function Genres({genresData, handleNewGenre}) {


  return (
   <>
   {
    genresData.map(genre => (
      <Genre 
        genresData={genresData}
        key={genre.id}
        id={genre.id}
        name={genre.name}
      />
    ))
   }
  <AddNewGenre 
    handleNewGenre={handleNewGenre}
    />
   </>
  )
}
