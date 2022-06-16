import React, {useState, useContext} from 'react'
import {Modal, Button} from "react-bootstrap"
import {
  Outlet,
  Link
} from "react-router-dom";
import LogoutButton from "./LogoutButton"
import {UserContext} from "../../context/userContext"




function Nav({ handleClose, handleShow, handleLoginClose , handleLoginShow}) {
  const {isVerified, user} = useContext(UserContext)
  return (
    <div id="navContainer">
      <span></span>
      {/* <nav id="navBar"> */}
      <nav id="navBar">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/ProfilePage">
          Profile
        </Link>
        <Link className="navLink" to="/CVPage">
          CV{" "}
        </Link>
        <Link className="navLink" to="/ExperiencePage">
          {" "}
          Experience
        </Link>
        <Link className="navLink" to="/CodeStackPage">
          {" "}
          Code Stack{" "}
        </Link>
        <Link className="navLink" to="/EditUserInfoPage">
          {" "}
          Edit Profile
        </Link>{" "}
        {/*must be signed in to edit profile */}
        <Link className="navLink" to="#" onClick={handleShow}>
          {" "}
          Create Profile{" "}
        </Link>
        {isVerified ? (
          <Link className="navLink " to="#">
            {" "}
            <LogoutButton />{" "}
          </Link>
        ) : (
          <Link className="navLink " to="#" onClick={handleLoginShow}>
            {" "}
            Login {" "}
          </Link>
        )}
      </nav>

      <Outlet />
    </div>
  );
}

export default Nav