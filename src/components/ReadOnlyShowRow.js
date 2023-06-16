import React from 'react'
import '../index.css'

export default function ReadOnlyShowRow({show, handleDelete, handleEditClick}) {

console.log("readonly", show.genre.category) 
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/shows/${show.id}`, {
      method: "DELETE", 
    })
    .then((res) => res.json())
    .then((deletedShow) => handleDelete(deletedShow))
    }


 

  return (
    <div>
       <tr>
                  <td>{show.title}</td>
                  {/* <td>{show.genre.category}</td> */}
                  <td>{show.seasons}</td>
                  <td>{show.number_of_episodes}</td>
                  <td>{show.original_language}</td>
                  <td><button type="button" onClick={(e) => handleEditClick(e, show)}>Edit</button></td>
                  <td><button type="button" onClick={handleDeleteClick}>delete</button></td>
                  </tr>
    </div>
  )
}
