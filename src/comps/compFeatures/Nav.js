import React, {useState} from 'react'
import {
  Outlet,
  Link
} from "react-router-dom";



function Nav() {


  return (
    
  <div id="navContainer">
  <span></span>
  <nav id="navBar">
    <Link className="navLink" to="/">Profile</Link>
    <Link className="navLink" to="/CVPage">CV </Link>
    <Link className="navLink" to="/ExperiencePage"> Experience</Link>
    <Link className="navLink" to="/CodeStackPage"> Code Stack </Link>
    <Link className="navLink" to="/CMSPage"> Edit Profile</Link> {/*must be signed in to edit profile */}
    <Link className="navLink" to="#"> Create Profile </Link> 
  </nav>
    
    <Outlet />
  </div>
  )
}

export default Nav