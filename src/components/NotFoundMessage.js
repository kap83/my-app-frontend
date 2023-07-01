import React from 'react'
import noShows from '../images/noShows.png'

export default function NotFoundMessage() {
  return (
  <div style={{display: 'inline'}}>
    <img src={noShows} alt='tumbleweed' />
  </div>
  )
}
