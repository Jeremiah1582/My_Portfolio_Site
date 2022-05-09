import React, {useContext} from 'react'
import { ListGroup } from "react-bootstrap";
import {UserContext} from "../../context/userContext"

function ProfileInfoSec() {
  const {user} = useContext(UserContext)
  console.log(user);
  return (
    <div className="infoSec">

<ListGroup className="section list">
  <ListGroup.Item className="listItem">{`${user.firstName} ${user.lastName}`}</ListGroup.Item>
  <ListGroup.Item className="listItem">{user.title}</ListGroup.Item>
  <ListGroup.Item className="listItem">{user.mobile}</ListGroup.Item>
  <ListGroup.Item className="listItem">{user.email}</ListGroup.Item>
  <ListGroup.Item className="listItem"><a href={user.github}>{user.github}</a></ListGroup.Item>
  <ListGroup.Item className="listItem"><a href={user.linkedin}> Linkedin profile</a></ListGroup.Item>
</ListGroup>
    
    </div>
  )
}

export default ProfileInfoSec