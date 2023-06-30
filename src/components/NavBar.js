import React from 'react'
import {NavLink} from 'react-router-dom'
import '../index.css'


export default function NavBar() {

    // eslint-disable-next-line
    // const LinkStyles = {
    //     color: "white",
    //     textDecorationLine: "underline overline",
    // }

  

  return (
  <div className='navBar'>
    <NavLink to="/" >HOME</NavLink>
    <br></br>   
    <br></br>
    <NavLink to='/genres'>GENRES</NavLink>
  </div>
  )
}
