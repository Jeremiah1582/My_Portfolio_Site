import React, {useState, useContext} from 'react'
import {Modal, Button, Form, Alert} from "react-bootstrap"
import axios from "axios"
import {UserContext } from "../../context/userContext"


function CreateProfileModal({show,handleClose, handleShow}) {  
const {emptyUserState, user} = useContext(UserContext)
const [msg, setMsg] = useState("")
const [newUser, setNewUser] = useState({
  email:"",
  password:""
}) 
// generate sign up date
const signupDate = new Date();

// handle Functions 
const handleInput=(e)=>{
  e.preventDefault()
  console.log(e.target.name, e.target.value);
  console.log(newUser);
  setNewUser({...newUser,[e.target.name]: e.target.value, signupDate})
}

 const handleFormSubmit =(e)=>{
   e.preventDefault()
   console.log("the newUser state is L:20 ", {newUser}) ;
  // post to backend function
axios
  .post("http://localhost:5001/user/registerNewUser", newUser, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("currentToken"),
    },
  })
  .then((result) => {
    console.log("L:23 frontend. The result of the post method is=", result);
    setNewUser({
      email: "",
      password: "",
    });
    setMsg(result.data.msg);

    setTimeout(() => {
      handleClose();
      setMsg("");
    }, 5000);
  });
 }


   if(show===true){
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Profile</Modal.Title>
        </Modal.Header>
        {msg !== "" ? <Alert variant="warning">{msg}</Alert> : ""}
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newUser.email}
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
                value={newUser.password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button type="submit" variant="primary">
              Create Profile
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
   }else{
     return (
       <div></div>
     )
   }
}

export default CreateProfileModal