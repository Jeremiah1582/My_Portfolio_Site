import React, {useState, useContext} from 'react'
import {Modal, Button, Form} from "react-bootstrap"
import axios from "axios"
import {UserContext } from "../../context/userContext"

function CreateProfileModal({show,handleClose, handleShow}) {  
const {emptyUserState, user} = useContext(UserContext)
const [newUser, setNewUser] = useState(emptyUserState) 

const signupDate =  new Date;
console.log(signupDate);

const handleInput=(e)=>{
  e.preventDefault()
  console.log(e.target.name, e.target.value);
  console.log(newUser);
  setNewUser({...newUser,[e.target.name]: e.target.value, signupDate})
}

 const submitNewUser =(e)=>{
  e.preventDefault()
   console.log("the newUser state is L:20 ",newUser);

axios
  .post("http://localhost:5001/user/registerNewUser", newUser)
  .then((result)=>{
    console.log('L:23 frontend. The result of the post method is=',result);
    setNewUser({emptyUserState})
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
        <Form onSubmit={submitNewUser}>
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

           <Button type="submit" variant="primary" >
            Create Profile
          </Button>

        </Form>         
        </Modal.Body>    
        <Modal.Footer>
        
         
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