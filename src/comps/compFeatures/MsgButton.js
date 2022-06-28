import React from 'react'
import button from  "../../images/whatsappIcon.png"
import {Card} from "react-bootstrap"

function MsgButton() {

  return (
    <div style={{ zIndex: 500 }}>
      <Card 
style={{
height:"100px", 
width:"100px",
position:"absolute",
background:"transparent",
border:"0px"
}}>
      <a href="#">
        <img src={button} alt="whatsApp icon" />
      </a>
    </Card>
    </div>
  );
}

export default MsgButton