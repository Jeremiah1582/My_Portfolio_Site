import React from 'react'
import button from  "../../images/whatsappIcon.png"
import {Card} from "react-bootstrap"

function MsgButton({ handleMsgModalShow }) {
  return (
    <button
      style={{border: "none" }}
      onClick={handleMsgModalShow}   
    >
        <img id="sendMsgButton" src={button} alt="whatsApp icon" />
     
    </button>
  );
}

export default MsgButton