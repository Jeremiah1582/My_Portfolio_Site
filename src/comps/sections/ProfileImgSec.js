import React from 'react'
import Image from 'react-bootstrap/Image'
import profilePic from "../../images/42174058_1133626796762326_7214894932375371776_n.jpg"
// import backgroundPic from "../../images/the-matterhorn-as-seen-from-the-lauterbrunnen-valley-digitally-stitched-by-dominic-kamp.jpg"

function ProfileImgSec() {

  return (
    <div id="imgContainerProfile">
      <div alt="profile Picture" className="backgroundImage  " />
      <img className="profilePic" src={profilePic}></img>
    </div>
  );
}

export default ProfileImgSec