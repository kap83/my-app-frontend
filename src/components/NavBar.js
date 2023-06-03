import React from 'react'
import { NavLink } from "react-router-dom"
import '../index.css'

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">TV Shows</NavLink>
      <NavLink to="/form">Update</NavLink>
    </nav>
  )
}
