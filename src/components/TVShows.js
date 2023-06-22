import React, { Fragment, useEffect, useState } from 'react'
import '../index.css'
import AddNewShow from './AddNewShow'
import EditableShowRow from './EditableShowRow'
import ReadOnlyShowRow from './ReadOnlyShowRow'


export default function TVShows() {

  const [shows, setShows] = useState([])

  console.log(shows)


  useEffect(()=> {
    fetch("http://localhost:9292/shows")
    .then(res => res.json())
    .then(showData => setShows(showData)
    )
  }, [])


  const [editedShowId, setEditedShowId] = useState(null)
  const [editedShowData, setEditedShowData] = useState({
    title: "",
    genre: "",
    seasons: "",
    episodes: "",
    language: ""
  })  

  const handleAddedShow = (addedShow) => {
    setShows(shows => [addedShow, ...shows])
  }

  const handleEditClick = (e, show) => {
    e.preventDefault()
   setEditedShowId(show.id)


    const formValues = {
      title: show.title,
      genre: show.genre.name,
      seasons: show.seasons,
      episodes: show.episodes,
      language: show.language
    }
    console.log("formValues", formValues)
    setEditedShowData(formValues)
  }

  const handleEditFormChange = (e) => {
    e.preventDefault()
    //create clearer variable name for editformdata
    setEditedShowData(editedShowData => ({...editedShowData, [e.target.name]: e.target.value}))

  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()


    fetch(`http://localhost:9292/shows/${editedShowId}`, {
      method: "PATCH", 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedShowData)
    })
    .then((res) => res.json())
    .then(updatedShowData => {
     
      //handleShowEdit(updatedShowData)

      const indexOfShowToEdit = shows.findIndex(show => show.id === updatedShowData.id)
      const copyOfShows = [...shows]
      copyOfShows[indexOfShowToEdit] = updatedShowData
      setShows(copyOfShows)


    })
    setEditedShowId(null)
    setEditedShowData("")
  }

  const handleCancelClick = () => {
    setEditedShowId(null);
  };

  const handleDeletedShow = (deletedShow) => {
    const IndexOfShowToDelete = shows.findIndex(show => show.id === deletedShow.id )
    const copyOfShows = [...shows]
    copyOfShows.splice(IndexOfShowToDelete, 1)
    setShows(copyOfShows)
  }


  return (
  <>
    <div>
      <AddNewShow shows={shows} handleAddedShow={handleAddedShow} />
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
                    <EditableShowRow editedShowData={editedShowData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} /> 
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