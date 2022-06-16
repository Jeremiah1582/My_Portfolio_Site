import React, {useEffect, useContext} from 'react'
import ProfileImgSec from "./sections/ProfileImgSec";
import ProfileInfoSec from "./sections/ProfileInfoSec";
import AboutSec from "./sections/AboutSec";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import AnimationSec from "./sections/AnimationSec";
  import { UserContext } from "../context/userContext.js";

function ProfilePage({children}) { //want to be able to add <sections/> dynamically using a Content Management System (CSM). Props/Context is key here

  const { getUser } = useContext(UserContext);
  // useEffect(() => {
  //   getUser();
  // }, []);
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