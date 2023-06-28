import React from 'react'
import {Link} from 'react-router-dom'

export default function Genre({genresData, id, name, handleDeletedGenre}) {

const handleClick = () => {
  //console.log(e.target.id)
  fetch(`http://localhost:9292/genres/${id}`, {
    method: "DELETE",
  })
  .then(res => res.json())
  .then(() => handleDeletedGenre(genresData))
}



  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Link to={`/genres/${id}/shows`}>{name}</Link>
              <button type="button"  onClick={handleClick}>DELETE</button>
            </th>
          </tr>
        </thead>
      </table>
    </>
  )
}
