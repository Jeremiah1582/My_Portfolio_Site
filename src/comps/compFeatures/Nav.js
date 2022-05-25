import React, {useState} from 'react'
import {Modal, Button} from "react-bootstrap"
import {
  Outlet,
  Link
} from "react-router-dom";



function Nav({handleClose, handleShow}) {
  return (
    <div id="navContainer">
      <span></span>
      <nav id="navBar">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/user/ProfilePage">
          Profile
        </Link>
        <Link className="navLink" to="/user/CVPage">
          CV{" "}
        </Link>
        <Link className="navLink" to="/user/ExperiencePage">
          {" "}
          Experience
        </Link>
        <Link className="navLink" to="/user/CodeStackPage">
          {" "}
          Code Stack{" "}
        </Link>
        <Link className="navLink" to="/user/editUserInfo">
          {" "}
          Edit Profile
        </Link>{" "}
        {/*must be signed in to edit profile */}
        <Link className="navLink" to="#" onClick={handleShow}>
          {" "}
          Create Profile{" "}
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Nav