import React from 'react'
import '../index.css'

export default function ReadOnlyShowRow({show, handleDeletedShow, handleEditClick}) {


  
  function handleDeleteClick() {
    fetch(`http://localhost:3000/shows/${show.id}`, {
      method: "DELETE", 
    })
    .then((res) => res.json())
    .then(() => handleDeletedShow(show))
    }


  return (
    <>
       <tr>
                  <td>{show.title}</td>
                  <td>{show.genre}</td>
                  <td>{show.seasons}</td>
                  <td>{show.number_of_episodes}</td>
                  <td>{show.original_language}</td>
                  <td><button type="button" onClick={(e)=> handleEditClick(e, show)}>Edit</button>
                  <button type="button" onClick={handleDeleteClick}>delete</button></td>
                  </tr>
    </>
  )
}
