import React, {useState,useContext} from 'react'
import { Card, Modal, Form , Button, InputGroup} from "react-bootstrap";
import axios from "axios";
import {  UserContext} from "../../context/userContext";

function EditWrkExp({ data, children }) {
const user = useContext(UserContext) //use context to get userId
  const [show, setShow] = useState(false);
  const [changedState, setChangedState] = useState({
    userId: user.user._id,
    itemId: data._id,
    imageLink: data.imageLink,
    companyLink: data.companyLink,
    startDate:data.startDate,
    endDate: data.endDate,
    companyName: data.companyName,
    position: data.position,
    responsibilities: data.responsibilities,
  });

  ;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const  handleFormSubmit = async(e) => {
    await axios
      .post("http://localhost:5001/admin/updateWorkExp", {changedState})
      .then(result=>{
          console.log('result from update WrkExp Func',result);
      });

  };

  const handleInput = (e) => {
    e.preventDefault()
   
    setChangedState({...changedState,[e.target.name]:e.target.value}); 
    console.log("changedState is...", changedState);
  }

  return (
    <div key={data._id}>
      <a href="#" onClick={handleShow}>
        {children}
      </a>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Work Experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              {/* company name */}
              <Form.Group className="mb-3" controlid="formBasicExpCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="name"
                  name="companyName"
                  value={changedState.companyName}
                //   defaultValue={data.companyName}
                  onChange={handleInput}
                />
              </Form.Group>
              {/* company Link*/}
              <Form.Group className="mb-3" controlid="formBasicExpCompanyLink">
                <Form.Label>Company Link</Form.Label>
                <Form.Control
                  type="link"
                  name="companyLink"
                  value={changedState.companyLink}
                //   defaultValue={data.companyLink}
                  onChange={handleInput}
                />
              </Form.Group>
              {/* image Link*/}
              <Form.Group className="mb-3" controlid="formBasicExpImageLink">
                <Form.Label>Logo Link</Form.Label>
                <Form.Control
                  type="link"
                  name="imageLink"
                  value={changedState.imageLink}
                //   defaultValue={data.imageLink}
                  onChange={handleInput}
                />
              </Form.Group>
              {/* position */}
              <Form.Group className="mb-3" controlid="formBasicExpPosition">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="name"
                  name="position"
                  value={changedState.position}
                //   defaultValue={data.position}
                  onChange={handleInput}
                />
              </Form.Group>
              {/* start date */}
              <Form.Group className="mb-3" controlid="formBasicExpStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="Date"
                  name="startDate"
                  value={changedState.startDate}
                //   defaultValue={changedState.startDate}
                  onChange={handleInput}
                />
              </Form.Group>
              {/* end date */}
              <Form.Group className="mb-3" controlid="formBasicExpEndDate">
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type="Date"
                  name="endDate"
                  value={changedState.endDate}
                //   defaultValue={changedState.endDate}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group>
                {/* responsibilities */}
                <Form.Label>Responsibilities</Form.Label>
                <Form.Control
                  controlid="formBasicExpResponsibilities"
                  style={{ height: "250px" }}
                  name="responsibilities"
                  as="textarea"
                  aria-label="With textarea"
                  placeholder={
                    data.responsibilities
                      ? data.responsibilities
                      : "responsibilities"
                  }
                  onChange={handleInput}
                  value={changedState.responsibilities}
                //   defaultValue={data.responsibilities}
                  size="xxl"
                />
              </Form.Group>

              <Button type="submit" variant="primary">
                Update
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default EditWrkExp

