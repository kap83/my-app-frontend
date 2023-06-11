import React from 'react'
import '../index.css'

export default function deleteBtn({handleDelete, show}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/shows/${show.id}`, {
          method: "DELETE", 
        })
        .then((res) => res.json())
        .then((deletedShow) => handleDelete(deletedShow))
        }

  return (
    <div>
      <button type="button" onClick={handleDeleteClick}>delete</button>
    </div>
  )
}
