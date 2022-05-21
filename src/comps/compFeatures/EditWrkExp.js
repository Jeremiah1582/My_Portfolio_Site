import React, {useState} from 'react'
import { Card, Modal, Form , Button, InputGroup} from "react-bootstrap";
import axios from "axios";

function EditWrkExp({ data, children }) {
  const [show, setShow] = useState(false);
  const [changedState, setChangedState] = useState({
    imageLink: data.imageLink,
    companyLink: data.companyLink,
    startDate:data.startDate,
    endDate: data.endDate,
    companyName: data.companyName,
    position: data.position,
    responsibilities: data.responsibilities,
  });

  console.log(changedState);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 const  handleFormSubmit = async(e) => {

    await axios
    .post("")
    .then()

  };

  const handleInput = (e) => {
    setChangedState({...changedState,[e.target.name]:e.target.defaultValue});
  }

  return (
    <div>
      <a href="#" onClick={handleShow}>
        {children}
      </a>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlid="formBasicExpCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="name"
                  name="companyName"
                  defaultValue={data.companyName}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlid="formBasicExpPosition">
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="name"
                  name="position"
                  defaultValue={data.position}
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlid="formBasicExpStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="Date"
                  name="startDate"
                  defaultValue={changedState.startDate}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlid="formBasicExpEndDate">
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type="Date"
                  name="endDate"
                  defaultValue={changedState.endDate}
                  onChange={handleInput}
                />
              </Form.Group>

              <Form.Group>
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
                  defaultValue={data.responsibilities}
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

