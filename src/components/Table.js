import React from 'react'

export default function Table(show) {

  // console.log("in table", show)
 
    const data = [

        {genre: "Science Fiction", title: "Star Trek", seasons: 3, episodes: 40, language: "English", ongoing: "No"},
        {genre: "Science Fiction", title: "BattleStar", seasons: 4, episodes: 20, language: "English", ongoing: "No"}
    ]
    return (

    <div>
      <table>
        <tr>
            <th>Genre:</th>
            <th>Title</th>
            <th>Seasons</th>
            <th>No of Eps</th>
            <th>Original Language</th>
            <th>Ongoing?</th>
        </tr>

        <tbody>
        {data.map((val, key) => {
            return (
                   <tr key={val.id}>
                    <td>{val.genre}</td>
                    <td>{val.title}</td>
                    <td>{val.seasons}</td>
                    <td>{val.episodes}</td>
                    <td>{val.language}</td>
                    <td>{val.ongoing}</td>
                    <td></td>
                  </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  )
}
