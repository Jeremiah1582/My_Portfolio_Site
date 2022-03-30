import React from 'react'
import {
  Outlet,
  Link
} from "react-router-dom";



function Nav() {
  return (
    
  <div id="navContainer">
  <span></span>
  <nav id="navBar">
    <Link to="/">Profile</Link>
    <Link to="/CVPage">CV </Link>
    <Link to="/ExperiencePage"> Experience</Link>
    <Link to="/CodeStackPage"> Code Stack </Link>
    <Link to="/CMSPage"> Edit Profile</Link> {/*must be signed in to edit profile */}
  </nav>
    <Outlet />
  </div>
  )
}

export default Nav