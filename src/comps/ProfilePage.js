import React from 'react'
import ProfileImgSec from "./sections/ProfileImgSec";
import ProfileInfoSec from "./sections/ProfileInfoSec";
import AboutSec from "./sections/AboutSec";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import AnimationSec from "./sections/AnimationSec";

function ProfilePage({children}) { //want to be able to add <sections/> dynamically using a Content Management System (CSM). Props/Context is key here
  console.log(window);
  return (
    <div >
      <Header page="ProfilePage"></Header>
      <div className="profilePageContainer">
      <ProfileImgSec page="ProfilePage"></ProfileImgSec>

      <div className="flexContainer">
        <ProfileInfoSec />
       
        <AboutSec />
        <AnimationSec />
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default ProfilePage