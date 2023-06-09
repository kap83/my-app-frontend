import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'

export default function AddNewShow({genresData, handleNewShow}) {

  const {id} = useParams()

  const [addNewShowData, setAddNewShowData] = useState({
    title: "",
    seasons: "",
    episodes: "",
    language: "",
    genre_id: id
  })

  const handleFormChange = (e) => {
    e.preventDefault()

    setAddNewShowData((shows => ({...shows, [e.target.name]: e.target.value})))

}

const handleSubmit = (e) => {
  e.preventDefault()

  fetch(`http://localhost:9292/genres/${addNewShowData.genre_id}/shows`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(addNewShowData)
  })
  .then(res => res.json())
  .then(newShow => {

   
    const updatedGenresData = genresData.map(genre=> {
      if(genre.id === newShow.genre_id) {
        const updatedShows = Object.values(genre.shows).filter(show => show.id !== newShow.id)
        updatedShows.push(newShow)
       
        return {
            ...genre,
            shows: updatedShows
        }
      }
      return genre
    })
    
    handleNewShow(updatedGenresData)
 
    setAddNewShowData({
      title: "",
      seasons: "",
      episodes: "",
      language: "",
      genre_id: id
    })

  })
}

  return (
    <>
      <h2>Add a New Show</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>SEASONS</th>
              <th>EPISODES</th>
              <th>LANGUAGE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input 
                  type='text'
                  name="title"
                  value={addNewShowData.title}
                  className='inputStyle'
                  required='required'
                  onChange={handleFormChange}
                />
              </td>
              <td>
                <input 
                  type='text'
                  name="seasons"
                  className='inputStyle'
                  value={addNewShowData.seasons}
                  required='required'
                  onChange={handleFormChange}
                />
              </td>
              <td>
                <input 
                  type='text'
                  name="episodes"
                  className='inputStyle'
                  value={addNewShowData.episodes}
                  required='required'
                  onChange={handleFormChange}
                />
              </td>
              <td>
                <input 
                  type='text'
                  name="language"
                  className='inputStyle'
                  value={addNewShowData.language}
                  required='required'
                  onChange={handleFormChange}
                />
              </td>
              <td>
                <button type='submit' className='btnStyle2'>ADD</button>
              </td>
            </tr>
          </tbody>
      </table>
   </form>
    </>
  )
}
