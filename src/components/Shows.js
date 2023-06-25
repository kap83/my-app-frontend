
import React, {useState, useEffect, Fragment} from 'react'
import {useParams} from 'react-router-dom'
import ReadOnlyShowRow from './ReadOnlyShowRow'
import EditableShowRow from './EditableShowRow'

export default function Shows({genresData}) {

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



// eslint-disable-next-line
const [editedShowId, setEditedShowId] = useState(null)
// eslint-disable-next-line
const [editableShowData, setEditableShowData] = useState({
  title: "",
  genre: "",
  seasons: "",
  episodes: "",
  language: ""
})  

//console.log("right id?", editedShowId)

const handleEditClick = (e, show) => {
  e.preventDefault()
  setEditedShowId(show.id)

// eslint-disable-next-line
  const formValues = {
      title: show.title,
      seasons: show.seasons,
      episodes: show.episodes,
      language: show.language 
  }
  setEditableShowData(formValues)
}

const handleCancelClick = () => {
  setEditedShowId(null)
}


  return (
    <>
    <h2>{genre.name}</h2>
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
          /> 
          : <ReadOnlyShowRow 
          handleEditClick={handleEditClick}
          show={show}
        />
        }
       </Fragment>
        )) 
        } 
      </tbody>



    </table>










   
   

    </>
  )
}

