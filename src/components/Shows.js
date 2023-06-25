
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

 // eslint-disable-next-line
export default function Shows({genresData}) {

const {id} = useParams()
const parseId = parseInt(id)


const [shows, setShows] = useState({
  name: "",
  shows: []
})

useEffect(() => {
  const findShows = genresData?.find(genre => genre.id === parseId)
    setShows(findShows)
  // eslint-disable-next-line
}, [genresData])

//console.log("in shows", shows)




  return (
    <>
    <h2>{shows.name}</h2>
    {
      shows.shows.map(show => (
        <div key={show.id}>
          <p>{show.title}</p>
        </div>
      ))
    }

    </>
  )
}

