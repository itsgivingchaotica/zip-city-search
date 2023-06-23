import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/navbar.css'

const Navbar = () => {
    return (
      <div id="navbar">
          <NavLink to="/">Home</NavLink>
      </div>
    )
        
}

export default Navbar