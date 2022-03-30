import React from 'react'
import ProfileImgSec from "./sections/ProfileImgSec";
import ProfileInfoSec from "./sections/ProfileInfoSec";
import Footer from "./sections/Footer";

function ProfilePage({children}) { //want to be able to add <sections/> dynamically using a Content Management System (CSM). Props/Context is key here
  return (
    <div className="section">
    
    <ProfileImgSec/>
    <ProfileInfoSec/>
    <Footer/>

    </div>
  )
}

export default ProfilePage