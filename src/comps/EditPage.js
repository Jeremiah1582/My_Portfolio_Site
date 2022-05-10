import React, {useContext, useState, useEffect, useReducer} from 'react'
import {Form, Button} from "react-bootstrap"
import axios from "axios"
import UserContext from "../context/userContext"

export default function EditPage() {
const setUser = useContext(UserContext)

  const submitChange =()=>{


axios
    .post(`http://localhost:5001/user/readUser`)
    .then(result=>{
      //update document in database 
      //use SetUser to update User in the context api

    })
  }

  return (
    <div id="editPageContainer">
  <Form submit={submitChange}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )
}
