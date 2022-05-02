import React, {useState} from 'react'
 import {Modal, Button} from "react-bootstrap"

function CreateProfileModal({prop}) {   

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if(prop){
    setShow(true)
    console.log(show);
  }

   if(show===true){
  return (
    <div>
 
  <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
   }else{
     return (
       <div></div>
     )
   }
}

export default CreateProfileModal