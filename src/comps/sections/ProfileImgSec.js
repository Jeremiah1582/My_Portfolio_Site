import React from 'react'
import Image from 'react-bootstrap/Image'
import profilePic from "../../images/42174058_1133626796762326_7214894932375371776_n.jpg"
// import backgroundPic from "../../images/the-matterhorn-as-seen-from-the-lauterbrunnen-valley-digitally-stitched-by-dominic-kamp.jpg"

function ProfileImgSec({page, children}) {

  return (
    <div >
      <img className={page==="HomePage"?"HomeprofilePic": "profilePic"} src={profilePic} alt="profile" ></img>
    </div>
  );
}

export default ProfileImgSec