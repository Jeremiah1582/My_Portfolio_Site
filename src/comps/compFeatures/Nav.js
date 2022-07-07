import React, { useState, useContext } from "react";
import { Modal, Button, Offcanvas, Navbar, Badge } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import LogoutButton from "./LogoutButton";
import MessagePage from "../MessagesPage"


function Nav({ handleClose, handleShow, handleLoginClose, handleLoginShow }) {
  const { isVerified, user, isAdmin } = useContext(UserContext);

  const mobileNav = () => {
    if (window.innerWidth <= 700) {
      return true;
    } else {
      return false;
    }
  };
  const links = [
    {
      linkName: "Home",
      to: "/",
      className: "navLink",
      adminView: false,
    },
    {
      linkName: "Profile",
      to: "/ProfilePage",
      className: "navLink",
      adminView: false,
    },
    {
      linkName: "CV",
      to: "/CVPage",
      className: "navLink",
      adminView: false,
    },
    {
      linkName: "Experience",
      to: "/ExperiencePage",
      className: "navLink",
      adminView: false,
    },
    {
      linkName: "CodeStack",
      to: "/CodeStackPage",
      className: "navLink",
      adminView: false,
    },
    {
      linkName: "Edit User",
      to: "/EditUserInfoPage",
      className: "navLink",
      adminView: true,
    },
    {
      linkName: "Messages",
      to: "/MessagesPage",
      className: "navLink",
      adminView: true,
      quantifiable: true 
     
    },
    {
      linkName: "Create User",
      to: "#",
      className: "navLink",
      adminView: true,
      function: handleShow,
    },
  ];
  const unauthLinks = links.filter((link) => {
    return link.adminView === false;
  });
  console.log(unauthLinks);

  return (
    <div id="navContainer">
      <span></span>

      {isAdmin ? (
          <Navbar id="navBar">
            {links.map((link) => {
              console.log(link);
              // ADMIN Nav
              return (
                <Link
                  className={link.className}
                  to={link.to}
                  onClick={link.function ? link.function : ""}
                >
                  {link.linkName} {" "}

                  {link.quantifiable ? (
                    <Badge bg="danger">{user.messagesReceived.length}</Badge>
                  ) : null}
                </Link>
              );
            })}
            <Link className="navLink " to="#">
              {" "}
              <LogoutButton />{" "}
            </Link>
          </Navbar>
        
      ) : ( //UserNAV
        <Navbar id="navBar">
          {unauthLinks.map((link) => {
            return (
              <Link
                className={link.className}
                to={link.to}
                onClick={link.function ? link.function : ""}
              >
                {link.linkName}
              </Link>
            );
          })}

          <Link className="navLink " to="#" onClick={handleLoginShow}>
            {" "}
            Login{" "}
          </Link>
        </Navbar>
      )}

      <Outlet />
    </div>
  );
}

export default Nav;
