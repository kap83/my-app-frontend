import React from 'react'

export default function ReadOnlyShowRow({show, handleEditClick}) {

    //console.log("in readonly", show)

  return (
   <>
    <tr>
        <td>{show.title}</td>
        <td>{show.seasons}</td>
        <td>{show.episodes}</td>
        <td>{show.language}</td>
        <td>
            <button type="button"onClick={(e) => handleEditClick(e, show)}>EDIT</button>
            <button type="button">DELETE</button>
        </td>
    </tr>
   </>
  )
}
