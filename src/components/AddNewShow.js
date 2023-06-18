import React, {useState} from 'react'
import '../index.css';

export default function AddNewShow({shows, handleAddedShow}) {

  const [addNewShowData, setAddNewShowData] = useState({
    title: "",
    genre: "",
    seasons: "",
    episodes: "",
    language: ""
  })


  const handleFormChange = (e) => {
    e.preventDefault()

    setAddNewShowData((shows => ({...shows, [e.target.name]: e.target.value})))

    // eslint-disable-next-line
    const newShowData = {
      title: addNewShowData.title,
      genre: addNewShowData.genre,
      seasons: addNewShowData.seasons,
      episodes: addNewShowData.episodes,
      language: addNewShowData.language,
     
    }
  } 
   const handleSubmit = (e) => { 
    e.preventDefault()

    fetch("http://localhost:3000/shows", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addNewShowData)
    })
    .then(res => res.json())
    .then(newShowData => handleAddedShow(newShowData))

    // setTitle("")
    // setGenre("")
    // setTotalEpisodes("")
    // setTotalSeasons("")
    // setLanguage("")
    // setOngoing("")
  }

  return (
    <form onSubmit={handleSubmit} > 
      <input 
        type='text'
        name='title' 
        required='required' 
        placeholder='Enter A Title'
        onChange={handleFormChange}
        />
      <input 
        type='text'
        name='genre' 
        required='required' 
        placeholder='Enter A Genre'
        onChange={handleFormChange}
        />
      <input 
        type='text' 
        name='seasons' 
        required='required' 
        placeholder='Enter the number of seasons'
        onChange={handleFormChange}
        />
      <input 
        type='text' 
        name='episodes' 
        required='required' 
        placeholder='Enter the number of episodes'
        onChange={handleFormChange}
        />
      <input type='text' 
      name='language' 
      required='required' 
      placeholder='Enter the original Language'
      onChange={handleFormChange}
      />
      <button type='submit'>Add</button>
    </form>
  )
}