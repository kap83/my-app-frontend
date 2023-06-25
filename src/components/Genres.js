import React from 'react'
import Genre from './Genre'

export default function Genres({genresData}) {

  //console.log("in Genres genreData", genresData)



  return (
   <>
   {
    genresData.map(genre => (
      <Genre 
        key={genre.id}
        id={genre.id}
        name={genre.name}
      />
    ))
   }
   </>
  )
}
