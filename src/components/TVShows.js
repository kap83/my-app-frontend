import React from 'react'
// eslint-disable-next-line
import AddShow from './AddShow'

export default function TVShows(shows) {

  console.log(shows)


    return (
      <>
      {/* <AddShow /> */}
      
       <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Genre:</th>
            <th>Title</th>
            <th>Seasons</th>
            <th>No of Eps</th>
            <th>Original Language</th>
            <th>Ongoing?</th>
          </tr>
        </thead>
        <tbody>
            {/* {shows.map((show) => {
               return (
                <tr key={show.id}>
                 <td>{show.genre}</td>
                 <td>{show.title}</td>
                 <td>{show.seasons}</td>
                 <td>{show.episodes}</td>
                 <td>{show.language}</td>
                 <td>{show.ongoing}</td>
                 <td><button>Edit</button></td>
                 <td><button>Delete</button></td>
               </tr>
               )
            })} */}
        </tbody> 
      </table>
    </div>
      </>
   
  )
}
