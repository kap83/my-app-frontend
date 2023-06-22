import React from 'react'
import '../index.css'

export default function ReadOnlyShowRow({show, handleDeletedShow, handleEditClick}) {


  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/shows/${show.id}`, {
      method: "DELETE", 
    })
    .then((res) => res.json())
    .then(() => handleDeletedShow(show))
    }

    console.log(show.name)

  return (
    <>
       <tr>
                  <td>{show.title}</td>
                  <td>{show.genre.name}</td>
                  <td>{show.seasons}</td>
                  <td>{show.episodes}</td>
                  <td>{show.language}</td>
                  <td><button type="button" onClick={(e)=> handleEditClick(e, show)}>Edit</button>
                  <button type="button" onClick={handleDeleteClick}>delete</button></td>
                  </tr>
    </>
  )
}
