
import React, {useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import ReadOnlyShowRow from './ReadOnlyShowRow'
import EditableShowRow from './EditableShowRow'
import AddNewShow from './AddNewShow'

export default function Shows({genresData, handleShowEditUpdate, handleDeletedShow, handleNewShow}) {

const {id} = useParams()
const parseId = parseInt(id)

const [genre, setGenre] = useState({
  name: "",
  shows: []
})

useEffect(() => {
  const findGenre = genresData?.find(genre => genre.id === parseId)
    setGenre(findGenre)
  // eslint-disable-next-line
}, [genresData])


const [editedShowId, setEditedShowId] = useState(null)
const [editableShowData, setEditableShowData] = useState({
  title: "",
  seasons: "",
  episodes: "",
  language: ""
})  

const handleEditClick = (e, show) => {
  e.preventDefault()
  setEditedShowId(show.id)

  const formValues = {
    //taking out the id causes an undefined 
      id: show.id,
      title: show.title,
      seasons: show.seasons,
      episodes: show.episodes,
      language: show.language, 
      genre_id: show.genre_id
  }
  setEditableShowData(formValues)
}


const handleEditFormChange = (e) => {
  e.preventDefault()
  setEditableShowData(editableShowData => ({...editableShowData, [e.target.name]: e.target.value}))

}

const handleCancelClick = () => {
  setEditedShowId(null)
}


const handleEditShowSubmit = (e) => {
  e.preventDefault()

 
  fetch(`http://localhost:9292/genres/${editableShowData.genre_id}/shows/${editableShowData.id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editableShowData)
  })
  .then(res => res.json())
  .then(updatedShow => {

    const updatedGenresData = genresData.map(genre => {
      if (genre.id === updatedShow.genre_id) {
        const updatedShows = genre.shows.filter(show => show.id !== updatedShow.id)
        updatedShows.push(updatedShow)
    
        return {
          ...genre,
          shows: updatedShows,
        }
      }
    
      return genre
    })
    handleShowEditUpdate(updatedGenresData)

  })
  setEditedShowId(null)
  setEditableShowData("")
  
}


  return (
    <>
    <h2>{genre?.name}</h2>
    <form onSubmit={handleEditShowSubmit}>
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
        { 
        genre?.shows.map(show => (
       <Fragment key={show.id}>
        {
          editedShowId === show.id ? 
          <EditableShowRow 
            editableShowData={editableShowData}
            handleCancelClick={handleCancelClick}
            handleEditFormChange={handleEditFormChange}
            /> :
          <ReadOnlyShowRow 
              handleEditClick={handleEditClick}
              show={show}
              handleDeletedShow={handleDeletedShow}
          />
        }
       </Fragment>
        )) 
        } 
    
      </tbody>
    </table>
    </form>
    <AddNewShow genresData={genresData} handleNewShow={handleNewShow} />
    </>
  )
}

