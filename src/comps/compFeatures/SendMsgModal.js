import React, { useContext, useState, useEffect } from "react";
import { Modal, Alert, Form , Button } from "react-bootstrap";
import axios from "axios"
import ProfileImgSec from "../sections/ProfileImgSec"


function SendMsgModal({
  handleMsgModalShow,
  handleMsgModalClose,
  msgModalShow,
}) {
  const [msg, setmMsg] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [msgDetails, setMsgDetails] = useState({
    title: "",
    author: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInput = (e) => {
    setMsgDetails({...msgDetails,[e.target.name]:e.target.value})
  };

  const handleFormSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5001/user/sendWhatsappMsg", {msgDetails})
    .then(result=>{
      console.log(result);
    });
   

  };

  return (
    <div>
      <Modal show={msgModalShow}  onHide={handleMsgModalClose}> 
    
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#76cc7a", color: "white" }}
        >
          <ProfileImgSec />
        
      
          <Modal.Title>Send Jeremiah a WhatsApp message </Modal.Title>
         
          
        </Modal.Header>
        <Form onSubmit={handleFormSubmit} >
          {msg !== "" ? <Alert variant="warning">{msg}</Alert> : ""}
          <Modal.Body id="msgModalBody">
            {/* Author */}
            <Form.Group
              className="m-1 msgModalInput "
              controlId="formBasicAuthor"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                placeholder="your name"
                name="author"
                value={msgDetails.author}
                onChange={handleInput}
              />
            </Form.Group>

            {/* company */}
            <Form.Group
              className="m-1 msgModalInput "
              controlId="formBasicCompany"
              style={{ width: "50%" }}
            >
              <Form.Control
                type="text"
                placeholder="company name"
                name="company"
                value={msgDetails.company}
                onChange={handleInput}
              />
            </Form.Group>

            {/* Email  */}
            <Form.Group
              className="m-1 msgModalInput "
              controlId="formBasicEmail"
            >
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                value={msgDetails.email}
                onChange={handleInput}
              />
            </Form.Group>
            {/* subject */}
            <Form.Group
              className="m-1 msgModalInput "
              controlId="formBasicSubject"
            >
              <Form.Control
                type="text"
                placeholder="subject of your message"
                name="subject"
                value={msgDetails.subject}
                onChange={handleInput}
              />
            </Form.Group>
            {/* message */}
            <Form.Text className="text-muted"></Form.Text>
            <Form.Group
              className="mb-3 msgModalInput "
              controlId="formBasicMessage"
            >
              <Form.Control
                style={{ height: "120px" }}
                type="textArea"
                placeholder="Message"
                name="message"
                onChange={handleInput}
                value={msgDetails.message}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#ececec" }}>
            <Form.Group
              className="mb-3 msgModalInput "
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            {!isPending ? (
              <Button type="submit" variant="primary">
                Send
              </Button>
            ) : (
              <Button disabled>sending ...</Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default SendMsgModal;
