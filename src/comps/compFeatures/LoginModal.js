import React, { useContext, useState } from "react";
import { Form, Modal, Button, Alert } from "react-bootstrap";
import { UserContext } from "../../context/userContext";
import axios from "axios";

function LoginModal({ loginShow, handleLoginClose, handleLoginShow }) {
  const { setUser, getUser, setIsVerified } = useContext(UserContext);

  const [isPending, setIsPending] = useState(false);
  const [msg, setMsg] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    console.log(loginDetails);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      axios
        .post("http://localhost:5001/user/login", { loginDetails })
        .then((result) => {
          if (result) {
            const auth = result.data.auth;
            const msg = result.data.msg;
            if (auth === true) {
              const user = result.data.user;
              const token = result.data.token;
              localStorage.setItem("currentToken", token);
              setIsVerified(true);
              getUser();
              setIsPending(false);
              // console.log("result....", result);
              setMsg(msg);
              // window.location.href = "/user/ProfilePage";
              handleLoginClose();
            } else if (auth === false) {
              setMsg(msg);
              setIsPending(false);
            } else {
              console.log("loginModal: user/login error");
            }
          }
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <div>
        <Modal show={loginShow} onHide={handleLoginClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Modal</Modal.Title>
          </Modal.Header>
          {msg !== "" ? <Alert variant="warning">{msg}</Alert> : ""}
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={loginDetails.email}
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
                  value={loginDetails.password}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              {!isPending && (
                <Button type="submit" variant="primary">
                  Login
                </Button>
              )}
              {isPending && <Button disabled>Logging in ...</Button>}
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default LoginModal;
