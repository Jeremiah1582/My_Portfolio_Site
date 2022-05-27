import React, {useContext, useState} from "react"
import {Form, Modal, Button} from "react-bootstrap"
import axios from "axios"
function LoginModal({loginShow, handleLoginClose,handleLoginShow}) {

      const [loginDetails, setLoginDetails] = useState({
          email:"", 
          password:""
        })


      const handleInput =(e)=>{
          setLoginDetails({...loginDetails, [e.target.name]: e.target.value})
      }
      const handleFormSubmit =(e)=>{
        axios
        .post("", {loginDetails})
        .then((result)=>{
            
        })}

  return (
    <div>
      <div>
        <Button variant="primary" onClick={handleLoginShow}>
          Launch demo modal
        </Button>

        <Modal show={loginShow} onHide={handleLoginClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={loginDetails.email}
                  onChange={handleInput}
                />

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInput}
                  value={loginDetails.password}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button type="submit" variant="primary">
               Login
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default LoginModal