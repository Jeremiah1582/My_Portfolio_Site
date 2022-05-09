import React, {useContext} from 'react'
import {UserContext} from "../../context/userContext"

function AboutSec() { 
  const {user} = useContext(UserContext)
  return (
    <div className="aboutSectionContainer section">
    <h5 className="aboutSecTitle">AboutSection</h5> 
    <p className="aboutSecPara"> {user.aboutUser}</p>
    
    
    
    
    
    
    </div>
  )
}

export default AboutSec