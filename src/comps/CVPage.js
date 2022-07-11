import React from 'react'
import LargeContentSec from "./sections/LargeContentSec";
import Image1 from "../images/crop-of-webdevCV.JPG"
import Image2 from "../images/crop-of-salesCV-CV.JPG"
function CVPage() {
  return <div className="flexContainer">
  
  <LargeContentSec 
  className="img1"
  image={Image1}> 
  Web Dev CV  
  </LargeContentSec>

  <LargeContentSec
  image={Image2}> 
  SAles CV 
  </LargeContentSec>
  </div>;
}

export default CVPage