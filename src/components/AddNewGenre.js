import React, {useState} from 'react'
import '../index.css'

export default function AddNewGenre({handleNewGenre}) {

//create state to hold input
// create onChange setNewGenre(e.target.value)
//create handleSubmit (e) --> includes the fetch data and put newGenre in json.stringify
//pass response data up to apps to setState

  const [newGenre, setNewGenre] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()

  const newGenreData = {
    name: newGenre
  }

  fetch('http://localhost:9292/genres', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newGenreData)
  })
  .then(res=> res.json())
  .then(updatedGenresData => handleNewGenre(updatedGenresData))
  setNewGenre("")
  console.log(newGenre)
}
    
  return (
    <>
    <h2>Add A New Genre</h2>
      <form onSubmit={handleSubmit}>
        <input 
            type='text'
            value={newGenre}
            placeholder='enter here'
            className='inputStyle'
            onChange={(e) => setNewGenre(e.target.value)}
        />
        <button className='btnStyle2' type='submit'>ADD</button>
      </form>
    </>
  )
}
