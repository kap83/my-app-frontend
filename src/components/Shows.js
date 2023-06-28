
import React, {useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import ReadOnlyShowRow from './ReadOnlyShowRow'
import EditableShowRow from './EditableShowRow'

export default function Shows({genresData, handleDeletedShow, handleGenresDataUpdate}) {
// const params = useParams()
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
  console.log("in shows", show)
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

console.log("editableShow", editableShowData)

const handleEditFormChange = (e) => {
  e.preventDefault()
  setEditableShowData(editableShowData => ({...editableShowData, [e.target.name]: e.target.value}))

}

const handleCancelClick = () => {
  setEditedShowId(null)
}


const handleEditShowSubmit = (e) => {
  e.preventDefault()

  console.log("wtf", editableShowData.genre_id)

  console.log("the fetch", fetch(`${editableShowData.genre_id}/shows/${editableShowData.id}`))
  console.log("parsed", parseId)
 

  //THIS WORKS
  fetch(`http://localhost:9292/genres/${editableShowData.genre_id}/shows/${editableShowData.id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editableShowData)
  })
  .then(res => res.json())
  .then(editedShowData => {

    const indexOfShowToEdit = genresData.findIndex(genre => genre.id === editedShowData.id)
    const copyOfGenresData = [...genresData]
    copyOfGenresData[indexOfShowToEdit] = editableShowData
    //handleGenresDataUpdate(copyOfGenresData)
  })
}




  return (
    <>
    <h2>{genre.name}</h2>
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
        genre.shows.map(show => (
       <Fragment key={show.id}>
        {
          editedShowId === show.id ? 
          <EditableShowRow 
          editableShowData={editableShowData}
          handleCancelClick={handleCancelClick}
          handleEditFormChange={handleEditFormChange}
          /> 
          : <ReadOnlyShowRow 
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


    </>
  )
}

