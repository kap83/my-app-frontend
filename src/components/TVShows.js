import React, { Fragment, useEffect, useState} from 'react'
import '../index.css'
// eslint-disable-next-line
import AddNewShow from './AddNewShow'
import EditableShowRow from './EditableShowRow'
import ReadOnlyShowRow from './ReadOnlyShowRow'


// eslint-disable-next-line
export default function TVShows() {
  
  const [shows, setShows] = useState([])
    //this will be for the patch 
  const [editedFormData, setEditedFormData] = useState({
    title: "",
    genre: "",
    seasons: "",
    eps: "",
    language: ""
  })  
    //works with handleEditClick -- to switch between editableshow and readonlyshow
  const [editedShowId, setEditedShowID] = useState(null)


  useEffect(()=> {
    fetch("http://localhost:3000/shows")
    .then(res => res.json())
    .then( showData => setShows(showData)
    )
  }, [])

  const handleEditClick = (e, show) => {
    e.preventDefault()
    // console.log(clickedShow)
    setEditedShowID(show.id)

    const formValues = {
      title: show.title,
      genre: show.genre.category,
      seasons: show.seasons,
      eps: show.number_of_episodes,
      language: show.original_language
    }
    setEditedFormData(formValues)
  }

  const handleEditFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value
    //const newFormData = {...editedFormData} <--what he did at 33:03
    const newFormData = [...editedFormData]
    newFormData[fieldName] = fieldValue
    setEditedFormData(newFormData) 
  }

  const handleDeletedShow = (deletedShow) => {
    const findDeletedShowById = shows.find(show => show.id === deletedShow.id )
    const copyOfShows = [...shows]
    //1 tells it to only remove the one element
    copyOfShows.splice(findDeletedShowById, 1)
    setShows(copyOfShows)
  }

// console.log("in tv", shows)

  return (
    <div>
      <form>
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
    </div>

  )
}