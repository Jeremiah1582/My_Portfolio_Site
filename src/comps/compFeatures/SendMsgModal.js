import React, { useContext, useState, useEffect } from "react";
import { Modal, Alert, Form , Button } from "react-bootstrap";


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
    authorEmail: "",
    company: "",
    message: "",
  });

  const handleInput = () => {};

  const handleFormSubmit = () => {};

  return (
    <div>
      

      <Modal show={msgModalShow} onHide={handleMsgModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Modal</Modal.Title>
        </Modal.Header>
        {msg !== "" ? <Alert variant="warning">{msg}</Alert> : ""}
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            {/* subject */}
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Control
                type="text"
                placeholder="what is the subject of your message"
                name="subject"
                value={msgDetails.subject}
                onChange={handleInput}
              />
            </Form.Group>

            {/* Author */}
            <Form.Group className="mb-3" controlId="formBasicAuthor">
              <Form.Control
                type="text"
                placeholder="please enter your name"
                name="author"
                value={msgDetails.author}
                onChange={handleInput}
              />
            </Form.Group>

            {/* company */}
            <Form.Group className="mb-3" controlId="formBasicCompany">
              <Form.Control
                type="text"
                placeholder="Enter company"
                name="company"
                value={msgDetails.company}
                onChange={handleInput}
              />
            </Form.Group>

            {/* Email  */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={msgDetails.email}
                onChange={handleInput}
              />

              {/* message */}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Control
                type="textArea"
                placeholder="Message"
                name="message"
                onChange={handleInput}
                value={msgDetails.message}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            {!isPending ? (
              <Button type="submit" variant="primary">
                Send
              </Button>
            ) : (
              <Button disabled>sending ...</Button>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default SendMsgModal;
