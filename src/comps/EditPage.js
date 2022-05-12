import React, {useContext, useState, useEffect, useReducer} from 'react'
import {Form, Button, InputGroup} from "react-bootstrap"
import axios from "axios"
import {UserContext} from "../context/userContext"

export default function EditPage() {
const {user,setUser} = useContext(UserContext)
const [changedInfo, setChangedInfo] = useState('')

  const submitChange =(e)=>{
    e.preventDefault()
axios
    .post(`http://localhost:5001/user/editUserInfo` )
    .then((result)=>{
      //update document in database 
      //use SetUser to update User in the context api
    })
  }
  

  return (
    <div >

   <div>
  <Form onSubmit={submitChange} className="flexContainer">
  {/* first name */}
  <div className="section editSectionA">
    <Form.Group className="mb-3" controlId="formBasicName" >
    
    <Form.Control 
    name='firstName' 
    type="firstName" 
    placeholder={user.firstName? user.firstName:"firstName" }
    value={changedInfo.firstName} 
    default={user.firstName}/>
  </Form.Group>
  {/* lastName  */}
    <Form.Group className="mb-3" controlId="formBasicName" >
    
    <Form.Control 
    name='lastName' 
    type="lastName" 
    placeholder={user.lastName? user.lastName:"lastName" }
    value={changedInfo.lastName} 
    default={user.lastName}/>
  </Form.Group>
  {/* title  */}
    <Form.Group className="mb-3" controlId="formBasicJobTitle">
    
    <Form.Control 
    name='title' 
    type="title" 
    placeholder={user.title? user.title:"title" }
    value={changedInfo.title} 
    default={user.email}/>
  </Form.Group>
  {/* email  */}
    <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control 
    name='email' 
    type="email" 
    placeholder={user.email? user.email:"email" }
    value={changedInfo.email} 
    default={user.email}/>
  </Form.Group>
  {/* mobile  */}
    <Form.Group className="mb-3" controlId="formBasicMobile">
    
    <Form.Control 
    name='mobile' 
    type="mobile" 
    placeholder={user.mobile? user.mobile:"mobile" }
    value={changedInfo.mobile} 
    default={user.email}/>
  </Form.Group>
  </div>

   <div className="section editSectionB">
  {/* location  */}
    <Form.Group className="mb-3" controlId="formBasicAddress" >
    
    <Form.Control 
    name='location' 
    type="location" 
    placeholder={user.location? user.location:"location" }
    value={changedInfo.location} 
    default={user.email}/>
  </Form.Group>
  {/* github  */}
    <Form.Group className="mb-3" controlId="formBasicLink" >
    
    <Form.Control 
    name='github' 
    type="github" 
    placeholder={user.github} 
    value={changedInfo.github} 
    default={user.email}/>
  </Form.Group>
  {/* linkedin  */}
    <Form.Group className="mb-3" controlId="formBasicLink" >
    
    <Form.Control 
    name='linkedin' 
    type="linkedin" 
    placeholder={user.linkedin? user.linkedin:"Linkedin Link"} value={changedInfo.linkedin} 
    default={user.linkedin} 
    />
  </Form.Group>
  {/* facebook  */}
    <Form.Group className="mb-3" controlId="formBasicLink" >
    
    <Form.Control 
    name='facebook' 
    type="facebook" 
    placeholder={user.facebook? user.facebook:"Facebook Link"} 
    value={changedInfo.facebook} 
    default={user.email}/>
  </Form.Group>
  {/* instagram  */}
    <Form.Group className="mb-3" controlId="formBasicLink" >
    
    <Form.Control 
    name='instagram' 
    type="instagram" 
    placeholder={user.instagram? user.instagram:"Instagram Link" }
    value={changedInfo.instagram} 
    default={user.email}/>
  </Form.Group>
  {/* otherSocials  */}
    <Form.Group className="mb-3" controlId="formBasicLink" >
    
    <Form.Control 
    name='otherSocials' 
    type="otherSocials" placeholder={user.otherSocials? user.otherSocials:"include other social links" }
    value={changedInfo.otherSocials} default={user.email}/>
  </Form.Group>
  </div>
  <div className="section editSectionC">
  {/* password  */}
    <Form.Group className="mb-3" controlId="formBasicPassword" >
    <Form.Control 
    name='password' 
    type="password" 
    placeholder={user.password} 
    value={changedInfo.password} default={user.email}/>
  </Form.Group>

  <div className="section editSectionD">
  <InputGroup>
    <InputGroup.Text>About</InputGroup.Text>
    <Form.Control 
    name="aboutSection"
    as="textarea" 
    aria-label="With textarea" 
    value=""
    size="lg"



    />
  </InputGroup>
  </div>
</div>

  <Button 
  variant="primary" 
  type="submit">
   make change 
  </Button>

</Form>
    </div>
 </div>

  )
}
