import React, {useState} from 'react'
import {Modal} from "react-bootstrap"

function LargeContentSec({image,children}) {
const [show, setShow] = useState(false)
 const [fullscreen, setFullscreen] = useState(true);
    const showModal= ()=>{setShow(true)}

  return (
    <div className="contentSec">
      <div className="children">{children}</div>

      <div>
        {image ? (
          <div>
            <img onClick={showModal} style={{ height: "400px" }} src={image} />
            <Modal
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>{children}</Modal.Title>
              </Modal.Header>
              <Modal.Body
              style={{display:"flex", 
              justifyContent:"center"}}>
                <img
                  className="img1"
                  style={{ height: "200%" }}
                  src={image}
                  alt="cv"
                />
              </Modal.Body>
            </Modal>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LargeContentSec