import React from 'react'
import {Link} from 'react-router-dom'

export default function Genre({id, name}) {


  return (
    <div >
      <table >
        <thead >
          <tr >
            <th style={{border: 'none'}}>
              <Link to={`/genres/${id}/shows`}>{name}</Link>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
