import React, {useContext, useState, useEffect, useReducer} from 'react'
import {Form, Button} from "react-bootstrap"
import axios from "axios"
import {UserContext} from "../context/userContext"

export default function EditPage() {
const {user,setUser} = useContext(UserContext)
const [changedInfo, setChangedInfo] = useState('')

  const submitChange =()=>{
axios
    .post(`http://localhost:5001/user/editUserInfo`, )
    .then(result=>{
      //update document in database 
      //use SetUser to update User in the context api
    })
  }
  

  return (
    <div id="editPageContainer">
    <h1>edit page</h1>
  <Form submit={submitChange}>
  
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>first name </Form.Label>
    <Form.Control name='firstName' type="firstName" placeholder={user.firstName} value={changedInfo.firstName} default={user.firstName}/>
  </Form.Group>
  {/* lastName  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>lastName </Form.Label>
    <Form.Control name='lastName' type="lastName" placeholder={user.lastName} value={changedInfo.lastName} default={user.lastName}/>
  </Form.Group>
  {/* title  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>title </Form.Label>
    <Form.Control name='title' type="title" placeholder={user.title} value={changedInfo.title} default={user.email}/>
  </Form.Group>
  {/* email  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>email </Form.Label>
    <Form.Control name='email' type="email" placeholder={user.email} value={changedInfo.email} default={user.email}/>
  </Form.Group>
  {/* mobile  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>mobile </Form.Label>
    <Form.Control name='mobile' type="mobile" placeholder={user.mobile} value={changedInfo.mobile} default={user.email}/>
  </Form.Group>
  {/* location  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>location </Form.Label>
    <Form.Control name='location' type="location" placeholder={user.location} value={changedInfo.location} default={user.email}/>
  </Form.Group>
  {/* github  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>github </Form.Label>
    <Form.Control name='github' type="github" placeholder={user.github} value={changedInfo.github} default={user.email}/>
  </Form.Group>
  {/* linkedin  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>linkedin </Form.Label>
    <Form.Control name='linkedin' type="linkedin" placeholder={user.linkedin} value={changedInfo.linkedin} default={user.email}/>
  </Form.Group>
  {/* facebook  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>facebook </Form.Label>
    <Form.Control name='facebook' type="facebook" placeholder={user.facebook} value={changedInfo.facebook} default={user.email}/>
  </Form.Group>
  {/* instagram  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>instagram </Form.Label>
    <Form.Control name='instagram' type="instagram" placeholder={user.instagram} value={changedInfo.instagram} default={user.email}/>
  </Form.Group>
  {/* otherSocials  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>otherSocials </Form.Label>
    <Form.Control name='otherSocials' type="otherSocials" placeholder={user.otherSocials} value={changedInfo.otherSocials} default={user.email}/>
  </Form.Group>
  {/* password  */}
    <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label>password </Form.Label>
    <Form.Control name='password' type="password" placeholder={user.password} value={changedInfo.password} default={user.email}/>
  </Form.Group>


  <Button variant="primary" type="submit"> make change </Button>

</Form>
    </div>
  )
}
