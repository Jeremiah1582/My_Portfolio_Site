import React, {useContext, useState} from 'react'
import{Alert} from "react-bootstrap"
import {UserContext} from "../../context/userContext"

function LogoutButton() {
const { isVerified, setIsVerified, setContextMsg } = useContext(UserContext);


    const handleLogout=()=>{
        window.localStorage.removeItem("currentToken");
        window.location.href="/"
        setIsVerified(false)
        setContextMsg("you are logged out");
    }

  return (
      <div>
    <div onClick={handleLogout}>Logout</div>
  
   </div>
  )
}

export default LogoutButton