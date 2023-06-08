import React from 'react'
// eslint-disable-next-line
import AddShow from './AddShow'

export default function TVShows({shows}) {

  // this is how you do it [{}]
// const [{title, seasons}] = shows
// console.log(title, seasons)

//these works too
//let test = shows.map((show) => console.log("test", show))
//{shows.map({title, genre: {category}, id, seasons, number_of_episodes, original_language, ongoing} => etc)}


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
            shows.map((show) => {
              return (
                <tr key={show.id}>
                  <td>{show.title}</td>
                  <td>{show.genre.category}</td>
                  <td>{show.seasons}</td>
                  <td>{show.number_of_episodes}</td>
                  <td>{show.original_language}</td>
                  <td>{show.ongoing}</td>
                </tr>
              )})
          }
        </tbody> 
      </table>
    </div>
      </>
   
  )
}
