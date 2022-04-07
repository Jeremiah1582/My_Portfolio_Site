import React from 'react'
import ProfileImgSec from "./sections/ProfileImgSec";
import ProfileInfoSec from "./sections/ProfileInfoSec";
import AboutSec from "./sections/AboutSec";
import Footer from "./sections/Footer";
import AnimationSec from "./sections/AnimationSec";

function ProfilePage({children}) { //want to be able to add <sections/> dynamically using a Content Management System (CSM). Props/Context is key here
  return (
    <div>
    
    <ProfileImgSec/>

    <div id="flexContainer">
      <ProfileInfoSec/>
      <AboutSec/>
      <AnimationSec/>
    </div>

    <Footer/>
    </div>
  )
}

export default ProfilePage