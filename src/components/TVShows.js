import React from 'react'
// eslint-disable-next-line
import AddShow from './AddShow'

export default function TVShows({shows}) {

  console.log(shows)

    return (
      <>
      {/* <AddShow /> */}
       <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre:</th>
            <th>Seasons</th>
            <th>No of Eps</th>
            <th>Original Language</th>
            <th>Ongoing?</th>
          </tr>
        </thead>
        <tbody>
          {
            shows.map(({title, genre, id, seasons, number_of_episodes, original_language, ongoing}) => {
              // console.log(ongoing)
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{genre.category}</td>
                  <td>{seasons}</td>
                  <td>{number_of_episodes}</td>
                  <td>{original_language}</td>
                  <td>{ongoing}</td>
                </tr>
              )})
          }
        </tbody> 
      </table>
    </div>
      </>
   
  )
}
