import React, {useState} from 'react'
import SendMsgModal from "../compFeatures/SendMsgModal";
import { Modal, Alert, Form, Button } from "react-bootstrap";

function ContactSec() {
 const [showMsgModal, setShowMsgModal] = useState(false);

  return (
    <div>
  
      <SendMsgModal
        showMsgModal={showMsgModal}
        setShowMsgModal={setShowMsgModal}
        // handleMsgModalClose={handleMsgModalClose}
      />
    </div>
  );
}

export default ContactSec