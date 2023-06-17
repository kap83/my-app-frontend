import React, { Fragment, useState } from 'react'
import '../index.css'
import AddNewShow from './AddNewShow'
import EditableShowRow from './EditableShowRow'
import ReadOnlyShowRow from './ReadOnlyShowRow'



export default function TVShows({shows, handleShowStateUpdate, handleUpdatedDelArray}) {

  //show is not a function is our new problem
  
  const [editedShowId, setEditedShowId] = useState(null)
  const [editedFormData, setEditedFormData] = useState({
    title: "",
    genre: "",
    seasons: "",
    episodes: "",
    language: ""
  })  


  const handleEditClick = (e, show) => {
    e.preventDefault()
   setEditedShowId(show.id)

    const formValues = {
      title: show.title,
      genre: show.genre,
      seasons: show.seasons,
      episodes: show.episodes,
      language: show.language
    }
    setEditedFormData(formValues)
  }

  const handleEditFormChange = (e) => {
    e.preventDefault()
    setEditedFormData(shows => ({...shows, [e.target.name]: e.target.value}))

    // const fieldName = e.target.name
    // const fieldValue = e.target.value
    // const newFormData = {...editedFormData}
    // newFormData[fieldName] = fieldValue
    // setEditedFormData(newFormData) 
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
    .then((res) => res.json(res))
    .then(updatedShowData => {
     handleShowStateUpdate(updatedShowData)
    })
    setEditedShowId(null)
    setEditedFormData("")
  }

  const handleDeletedShow = (deletedShow) => {
    const findDeletedShowById = shows.find(show => show.id === deletedShow.id )
    const copyOfShows = [...shows]
    copyOfShows.splice(findDeletedShowById, 1)
    handleUpdatedDelArray(copyOfShows)
  }



  return (
  <>
    <div>
      <AddNewShow shows={shows} handleShowStateUpdate={handleShowStateUpdate} />
    </div>
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
              shows.map(show => (
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
  </>
  )
}