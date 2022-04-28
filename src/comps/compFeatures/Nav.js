import React, {useState} from 'react'
import {
  Outlet,
  Link
} from "react-router-dom";
import ProfilePage from "../ProfilePage"



function Nav() {
const [showModal, setShowModal] = useState(false)

const handleModal = ()=>{
  if(showModal === false){
     setShowModal(true)
  }
  }

  return (
    
  <div id="navContainer">
  <span></span>
  <nav id="navBar">
    <Link className="navLink" to="/">Profile</Link>
    <Link className="navLink" to="/CVPage">CV </Link>
    <Link className="navLink" to="/ExperiencePage"> Experience</Link>
    <Link className="navLink" to="/CodeStackPage"> Code Stack </Link>
    <Link className="navLink" to="/CMSPage"> Edit Profile</Link> {/*must be signed in to edit profile */}
    <div className="navLink" onClick={handleModal} > Create Profile</div>
  </nav>
    
    <Outlet />
  </div>
  )
}

export default Nav