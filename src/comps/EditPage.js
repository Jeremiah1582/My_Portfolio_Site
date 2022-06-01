import React, { useContext, useState, useEffect, useReducer } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../context/userContext";
import ExperienceModal from "./compFeatures/AddExperienceModal";


 function EditPage() {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);
  const handleSubmitChange = (e) => {
e.preventDefault()
    axios
      .post(`http://localhost:5001/admin/editUserInfo`, user)
      .then((result) => {
        console.log("result from handle submit is...", result);
        //update document in database
        //use SetUser to update User in the context api
      });
  };

  return (
    <div>
      <ExperienceModal />
      <div>
        <Form onSubmit={handleSubmitChange} className="flexContainer">
          {/* first name */}
          <div className="section editSectionA">
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Control
                name="firstName"
                type="firstName"
                placeholder={user.firstName ? user.firstName : "firstName"}
                defaultValue={user.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            {/* lastName  */}
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Control
                name="lastName"
                type="lastName"
                placeholder={user.lastName ? user.lastName : "lastName"}
                onChange={handleChange}
                defaultValue={user.lastName}
              />
            </Form.Group>
            {/* title  */}
            <Form.Group className="mb-3" controlId="formBasicJobTitle">
              <Form.Control
                name="title"
                type="title"
                placeholder={user.title ? user.title : "title"}
                onChange={handleChange}
                defaultValue={user.title}
              />
            </Form.Group>
            {/* email  */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="email"
                type="email"
                placeholder={user.email ? user.email : "email"}
                onChange={handleChange}
                defaultValue={user.email}
              />
            </Form.Group>
            {/* mobile  */}
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Control
                name="mobile"
                type="mobile"
                placeholder={user.mobile ? user.mobile : "mobile"}
                onChange={handleChange}
                defaultValue={user.mobile}
              />
            </Form.Group>
          </div>

          <div className="section editSectionB">
            {/* location  */}
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control
                name="location"
                type="location"
                placeholder={user.location ? user.location : "location"}
                onChange={handleChange}
                defaultValue={user.location}
              />
            </Form.Group>
            {/* github  */}
            <Form.Group className="mb-3" controlId="formBasicLink1">
              <Form.Control
                name="github"
                type="github"
                placeholder={user.github}
                onChange={handleChange}
                defaultValue={user.github}
              />
            </Form.Group>
            {/* linkedin  */}
            <Form.Group className="mb-3" controlId="formBasicLink2">
              <Form.Control
                name="linkedin"
                type="linkedin"
                placeholder={user.linkedin ? user.linkedin : "Linkedin Link"}
                onChange={handleChange}
                defaultValue={user.linkedin}
              />
            </Form.Group>
            {/* facebook  */}
            <Form.Group className="mb-3" controlId="formBasicLink3">
              <Form.Control
                name="facebook"
                type="facebook"
                placeholder={user.facebook ? user.facebook : "Facebook Link"}
                onChange={handleChange}
                defaultValue={user.facebook}
              />
            </Form.Group>
            {/* instagram  */}
            <Form.Group className="mb-3" controlId="formBasicLink5">
              <Form.Control
                name="instagram"
                type="instagram"
                placeholder={user.instagram ? user.instagram : "Instagram Link"}
                onChange={handleChange}
                defaultValue={user.instagram}
              />
            </Form.Group>
            {/* otherSocials  */}
            <Form.Group className="mb-3" controlId="formBasicLink6">
              <Form.Control
                name="otherSocials"
                type="otherSocials"
                placeholder={
                  user.otherSocials
                    ? user.otherSocials
                    : "include other social links"
                }
                onChange={handleChange}
                defaultValue={user.otherSocials}
              />
            </Form.Group>
          </div>
          <div className="section editSectionC">
            {/* password  */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="password"
                type="password"
                onChange={handleChange}
                defaultValue={user.password}
                autoComplete={user.password}
              />
            </Form.Group>
            <div className="section editSectionD">
              <InputGroup>
                <InputGroup.Text>About</InputGroup.Text>
                <Form.Control
                  style={{ height: "250px" }}
                  name="aboutUser"
                  as="textarea"
                  aria-label="With textarea"
                  placeholder={
                    user.aboutUser
                      ? user.aboutUser
                      : "write a short bio about yourself"
                  }
                  onChange={handleChange}
                  defaultValue={user.aboutUser}
                  size="xxl"
                />
              </InputGroup>
            </div>{" "}
            <Button variant="primary" type="submit">
              Update Profile
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}export default EditPage
