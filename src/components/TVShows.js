import React, {Fragment, useState} from 'react'
import '../index.css'
// eslint-disable-next-line
import AddNewShow from './AddNewShow'
import EditableShowRow from './EditableShowRow'
import ReadOnlyShowRow from './ReadOnlyShowRow'


// eslint-disable-next-line
export default function TVShows({shows, handleAddedShow, handleDelete}) {

  //eslint-disable-next-line
const [editedShowId, setEditedShowID] = useState(null)
// const [editedFormData, setEditedFormData] = useState([])


const handleEditClick = (e, show) => {

  e.preventDefault()
  console.log(e)
  setEditedShowID(show.id)

  // const editedShowData = {
  //   title: title,
  //   genre: {category: genre},
  //   seasons: totalSeasons,
  //   number_of_episodes: totalEpisodes,
  //   original_language: language
  // }


  fetch(`http://localhost:9292/shows/${show.id}`, {
    method: "PATCH", 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify()
    })
    .then((res) => res.json())
    .then((editedShow) => { console.log(editedShow)

        // CAN YOU PUT THIS PART IN THE JSON.stringify??????
      // const fieldName = e.target.getAttribute("name")
      // const fieldValue = e.target.value

  //     // const copyOfShows = [...shows]
  //     // console.log(copyOfShows)
  //     // copyOfShows[fieldName] = fieldValue
  //     // setEditedFormData(copyOfShows)


    })
    
  }

console.log("in tv" , shows)

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
              shows.map((show) => ( 
                <Fragment>
                  {
                  editedShowId === show.id ? (
                    <EditableShowRow key={show.id} show={show}  />) : (
                    <ReadOnlyShowRow show={show} handleEditClick={handleEditClick} handleDelete={handleDelete} />)
                }
                </Fragment>
              ))
            }
          </tbody>
        </table>
      </form>
    </div>

  )
}