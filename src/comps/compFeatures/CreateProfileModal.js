import React, {useState, useContext} from 'react'
import {Modal, Button, Form} from "react-bootstrap"
import axios from "axios"
import {UserContext } from "../../context/userContext"

function CreateProfileModal({show,handleClose, handleShow}) {  
const {emptyUserState, value} = useContext(UserContext)
const [newUser, setNewUser] = useState(emptyUserState) 
console.log(emptyUserState);

const handleInput=(e)=>{
  console.log(e.target.name, e.target.value);
  setNewUser({...newUser,[e.target.name]: e.target.vale  })
}
 const submitNewUser =()=>{
   console.log(newUser);
axios
  .post("http://localhost:5001/user/registerNewUser", newUser)
  .then(result=>{
    console.log(result);
    setNewUser({
      email:"",
      password:""
    })

  })
 }


   if(show===true){
  return (
    <div>
 
  <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
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
            value={newUser.password} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>         
        </Modal.Body>    
        <Modal.Footer>
        
          <Button submit={submitNewUser} variant="primary" onClick={handleClose}>
            Create Profile
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