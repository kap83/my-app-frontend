import React from 'react'

export default function ReadOnlyShowRow({show, handleEditClick, handleDeletedShow}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/shows/${show.id}`, {
          method: "DELETE", 
        })
        .then(handleDeletedShow(show))
        }
    

  return (
   <>
    <tr>
        <td>{show.title}</td>
        <td>{show.seasons}</td>
        <td>{show.episodes}</td>
        <td>{show.language}</td>
        <td>
            <button type="button"onClick={(e) => handleEditClick(e, show)}>EDIT</button>
            <button type="button" onClick={handleDeleteClick}>DELETE</button>
        </td>
    </tr>
    
   </>
  )
}
