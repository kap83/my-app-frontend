import React, {useState} from 'react'
import '../index.css';

export default function AddNewShow({handleAddedShow}) {

  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [totalEpisodes, setTotalEpisodes] = useState("")
  const [totalSeasons, setTotalSeasons] = useState("")
  const [language, setLanguage] = useState("")
  // const [ongoing, setOngoing] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newShowData = {
      title: title,
      genre: {category: genre},
      seasons: totalSeasons,
      number_of_episodes: totalEpisodes,
      original_language: language,
      // ongoing: ongoing
    }

    fetch("http://localhost:9292/shows", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newShowData)
    })
    .then(res => res.json())
    .then(updatedShowData => handleAddedShow(updatedShowData))

    // setTitle("")
    // setGenre("")
    // setTotalEpisodes("")
    // setTotalSeasons("")
    // setLanguage("")
    // setOngoing("")
  }

  return (
    <form onSubmit={handleSubmit} className='formStyle'> 
      <input 
        type='text'
        value={title} 
        name='title' 
        required='required' 
        placeholder='Enter A Title'
        onChange={(e)=> setTitle(e.target.value)}
        />
      <input 
        type='text'
        value={genre} 
        name='Genre' 
        required='required' 
        placeholder='Enter A Genre'
        onChange={(e)=> setGenre(e.target.value)}
        />
      <input 
        type='text' 
        value={totalSeasons} 
        name='Seasons' 
        required='required' 
        placeholder='Enter the number of seasons'
        onChange={(e)=> setTotalSeasons(e.target.value)}
        />
      <input 
        type='text' 
        value={totalEpisodes} 
        name='Episodes' 
        required='required' 
        placeholder='Enter the number of episodes'
        onChange={(e)=> setTotalEpisodes(e.target.value)}
        />
      <input type='text' 
      value={language}
      name='Lanuage' 
      required='required' 
      placeholder='Enter the original Language'
      onChange={(e)=> setLanguage(e.target.value)}
      />
      {/* <input 
        type='text' 
        value={ongoing}
        name='Ongoing?' 
        required='required' 
        placeholder='Is it ongoing?'
        onChange={(e)=> setOngoing(e.target.value)}
        /> */}
      <button type='submit'>Add</button>
    </form>
  )
}