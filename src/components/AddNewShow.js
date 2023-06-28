import React from 'react'

export default function AddNewShow() {


  return (
    <>
        <h3>Add a New Show</h3>
    <table>
        <thead>
        <tr>
          <th>TITLE</th>
          <th>SEASONS</th>
          <th>EPISODES</th>
          <th>LANGUAGE</th>
          <th>ACTIONS</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <input 
              type='text'
              name="title"
              required='required'
            />
          </td>
        <td>
            <input 
              type='text'
              name="seasons"
              required='required'
            />
          </td>
          <td>
            <input 
              type='text'
              name="episodes"
              required='required'
            />
          </td>
          <td>
            <input 
              type='text'
              name="language"
              required='required'
            />
          </td>
          <td>
            <button type='button'>ADD</button>
          </td>
          </tr>
        </tbody>
    </table>
    </>
  )
}
