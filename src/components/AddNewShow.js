import React, {useState} from 'react'
import '../index.css';

export default function AddNewShow({genresAndShows, handleAddedShow}) {

  const [addNewShowData, setAddNewShowData] = useState({
    title: "",
    seasons: "",
    episodes: "",
    language: ""
  })


// eslint-disable-next-line
  const handleFormChange = (e) => {
    e.preventDefault()

    setAddNewShowData((shows => ({...shows, [e.target.name]: e.target.value})))

  } 

   const handleSubmit = (e) => { 
    e.preventDefault()

    fetch(`http://localhost:9292/genres//shows`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addNewShowData)
    })
    .then(res => res.json())
    .then(newShowData => handleAddedShow(newShowData))

    setAddNewShowData("")
    
  }

 

  return (
    <form onSubmit={handleSubmit} > 
      <input 
        type='text'
        name='title' 
        required='required' 
        placeholder='Enter A Title'
        //onChange={handleFormChange}
        />
     {/* <select
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
     >
      <option>Select Genre</option>
        {optionsForDropDown}
     </select> */}

      <input 
        type='text' 
        name='seasons' 
        required='required' 
        placeholder='Enter the number of seasons'
        //onChange={handleFormChange}
        />
      <input 
        type='text' 
        name='episodes' 
        required='required' 
        placeholder='Enter the number of episodes'
        //onChange={handleFormChange}
        />
      <input type='text' 
      name='language' 
      required='required' 
      placeholder='Enter the original Language'
      //onChange={handleFormChange}
      />
      <button type='submit'>Add</button>
    </form>
  )
}