import React from 'react'
import {Link} from 'react-router-dom'

export default function Genre({id, name}) {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Link to={`/genres/${id}/shows`}>{name}</Link>
            </th>
          </tr>
        </thead>
      </table>
    </>
  )
}
