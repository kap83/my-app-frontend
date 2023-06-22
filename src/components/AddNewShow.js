import React, {useState} from 'react'
import '../index.css';

export default function AddNewShow({ListOfGenres, shows, handleAddedShow}) {

  const [addNewShowData, setAddNewShowData] = useState({
    title: "",
    seasons: "",
    episodes: "",
    language: ""
  })

  const [genre, setGenre] = useState([])

  //console.log(genre)

  const handleFormChange = (e) => {
    e.preventDefault()

    setAddNewShowData((shows => ({...shows, [e.target.name]: e.target.value})))

    // eslint-disable-next-line
    const newShowData = {
      title: addNewShowData.title,
      seasons: addNewShowData.seasons,
      episodes: addNewShowData.episodes,
      language: addNewShowData.language,
    }
  } 

   const handleSubmit = (e) => { 
    e.preventDefault()

    fetch(`http://localhost:9292/genres/${genre}/shows`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addNewShowData)
    })
    .then(res => res.json())
    .then(newShowData => handleAddedShow(newShowData))
    
  }

  const optionsForDropDown = ListOfGenres?.map(genre => (
    <option key={genre.id} value={genre.id}>{genre.name}</option>
  ))

  return (
    <form onSubmit={handleSubmit} > 
      <input 
        type='text'
        name='title' 
        required='required' 
        placeholder='Enter A Title'
        onChange={handleFormChange}
        />
     <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
     >
      <option>Select Genre</option>
        {optionsForDropDown}
     </select>

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