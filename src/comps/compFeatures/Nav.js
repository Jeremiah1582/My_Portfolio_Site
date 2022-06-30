import React, {useState, useContext} from 'react'
import { Modal, Button, Offcanvas, Navbar } from "react-bootstrap";
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
      {/* {window.innerWidth < 700 ? ( */}
        <Navbar id="navBar">
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
          {isVerified ? (
            <Link className="navLink " to="#">
              {" "}
              <LogoutButton />{" "}
            </Link>
          ) : (
            <Link className="navLink " to="#" onClick={handleLoginShow}>
              {" "}
              Login{" "}
            </Link>
          )}
        </Navbar>
      {/* ) : (
        <Navbar.Offcanvas id="navBar">
        <Offcanvas.Body>
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
          {isVerified ? (
            <Link className="navLink " to="#">
              {" "}
              <LogoutButton />{" "}
            </Link>
          ) : (
            <Link className="navLink " to="#" onClick={handleLoginShow}>
              {" "}
              Login{" "}
            </Link>
          )}

        </Offcanvas.Body>
          
        </Navbar.Offcanvas>
      )} */}

      <Outlet />
    </div>
  );
}

export default Nav