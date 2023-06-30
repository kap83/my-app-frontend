import React from 'react'
import {NavLink} from 'react-router-dom'
import '../index.css'


export default function NavBar() {
  

  return (
  <div className='navBar'>
    <NavLink to="/" style={({isActive}) => ({
      textDecoration: isActive ? 'underline' : 'none' 
    })}>HOME</NavLink>
    <br></br>   
    <br></br>
    <NavLink to='/genres' style={({isActive}) => ({
      textDecoration: isActive ? 'underline' : 'none' 
    })} >GENRES</NavLink>
  </div>
  )
}
