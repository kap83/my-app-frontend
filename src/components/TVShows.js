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
  // const [editedFormData, setEditedFormData] = useState([])  
    //works with handleEditClick -- to switch between editableshow and readonlyshow
    // eslint-disable-next-line
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
                    <EditableShowRow /> 
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