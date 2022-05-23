import React, {useState, useContext} from 'react'
import {Modal, Form, Button} from "react-bootstrap"
import axios from "axios"
import {UserContext} from "../../context/userContext"

function ExperienceModal() {
    const user = useContext(UserContext) 
    const userId = user.user._id
    const [workExp, setWorkExp] = useState({
      imageLink: "",
      companyLink: "",
      startDate: {},
      endDate: {},
      companyName: "",
      position: "",
      responsibilities: ""
    });
    const [msg, setMsg] = useState('')
   
    
const [show, setShow] = useState(false)
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const handleExpInput =(e)=>{
         e.preventDefault()
         ;
         setWorkExp({...workExp, [e.target.name]: e.target.value})
     }

     const handleAddExpSubmit =(e)=>{
    //  e.preventDefault()
        axios
          .post("http://localhost:5001/user/addWorkExp", {workExp, userId})
          .then((result) => {
            console.log("addWorkExp result from Bck=", result);
            setMsg(result.msg);
          });
     }
     

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Work <br />
        Experience
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Work Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form userId={userId} onSubmit={handleAddExpSubmit}>
            <Form.Group className="mb-3 col-5" controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                name="startDate"
                type="date"
                placeholder="start date"
                onChange={handleExpInput}
                value={workExp.startDate}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 col-5" controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                name="endDate"
                type="date"
                placeholder="end date"
                onChange={handleExpInput}
                value={workExp.endDate}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="companyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="companyName"
                type="name"
                placeholder="Company Name"
                onChange={handleExpInput}
                value={workExp.companyName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="position">
              <Form.Label>position</Form.Label>
              <Form.Control
                name="position"
                type="name"
                placeholder="position"
                onChange={handleExpInput}
                value={workExp.position}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="responsibilities">
              <Form.Label>responsibilities</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="responsibilities"
                type="name"
                placeholder="responsibilities"
                onChange={handleExpInput}
                value={workExp.responsibilities}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Add Exp
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ExperienceModal