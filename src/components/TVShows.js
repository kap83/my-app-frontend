import React, { Fragment, useEffect, useState} from 'react'
import '../index.css'
// eslint-disable-next-line
import AddNewShow from './AddNewShow'
import EditableShowRow from './EditableShowRow'
import ReadOnlyShowRow from './ReadOnlyShowRow'


// eslint-disable-next-line
export default function TVShows() {
  
  const [shows, setShows] = useState([])
    //works with handleEditClick -- to switch between editableshow and readonlyshow
  const [editedShowId, setEditedShowId] = useState(null)
    //this will be for the patch 
  const [editedFormData, setEditedFormData] = useState({
    title: "",
    genre: {
      "id": "",
      "category": ""
    },
    seasons: "",
    eps: "",
    language: ""
  })  


  useEffect(()=> {
    fetch("http://localhost:3000/shows")
    .then(res => res.json())
    .then( showData => setShows(showData)
    )
  }, [])

  const handleEditClick = (e, show) => {
    e.preventDefault()
   setEditedShowId(show.id)

    const formValues = {
      title: show.title,
      genre: show.genre.category,
      seasons: show.seasons,
      episodes: show.number_of_episodes,
      language: show.original_language
    }
    setEditedFormData(formValues)
  }

  const handleEditFormChange = (e) => {
    e.preventDefault()
    console.log("line 49", e)
    // setEditedFormData({...shows, [e.target.name]: e.target.value})

    const fieldName = e.target.name
    const fieldValue = e.target.value
    const newFormData = {...editedFormData}
    newFormData[fieldName] = fieldValue
    setEditedFormData(newFormData) 
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/shows/${editedShowId}`, {
      method: "PATCH", 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedFormData)
    })
    .then((res) => res.json())
    .then(updatedShowData => console.log(updatedShowData))
  
    
    // setEditedShowId(null)
  }

  const handleDeletedShow = (deletedShow) => {
    const findDeletedShowById = shows.find(show => show.id === deletedShow.id )
    const copyOfShows = [...shows]
    copyOfShows.splice(findDeletedShowById, 1)
    setShows(copyOfShows)
  }



  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Seasons</th>
              <th>No of Episodes</th>
              <th>Original Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              shows?.map(show => (
                <Fragment key={show.id}>
                  {
                    editedShowId === show.id ? 
                    <EditableShowRow editedFormData={editedFormData} handleEditFormChange={handleEditFormChange} /> 
                    : <ReadOnlyShowRow show={show} handleEditClick={handleEditClick} handleDeletedShow={handleDeletedShow}/> 
                  }
                </Fragment>
              ))}
          </tbody>
        </table>
      </form>
    </div>

  )
}