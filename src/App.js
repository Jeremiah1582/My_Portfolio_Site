import React,{useState, useContext, useEffect  } from "react";
import Nav from "./comps/compFeatures/Nav";
import NavAdmin from "./comps/compFeatures/NavAdmin";
import HomePage from "./comps/HomePage";
import ProfilePage from "./comps/ProfilePage";
import CodeStackPage from "./comps/CodeStackPage";
import ExperiencePage from "./comps/ExperiencePage";
import CVPage from "./comps/CVPage";
import CreateProfileModal from "./comps/compFeatures/CreateProfileModal";
import LoginModal from "./comps/compFeatures/LoginModal"
import EditPage from "./comps/EditPage";
import SendMsgModal from "./comps/compFeatures/SendMsgModal"
import MsgButton from "./comps/compFeatures/MsgButton"
import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Alert,Modal, Button} from "react-bootstrap"
import {UserContext}from "./context/userContext"



function App() {

const {contextMsg, isVerified, isAdmin} = useContext(UserContext)
const [show, setShow] = useState(false);
const [loginShow, setLoginShow] = useState(false);
const [msgModalShow, setMsgModalShow] = useState(false);

const handleShow = () => setShow(true);
const handleLoginShow = () => setLoginShow(true);
const handleMsgModalShow = () => setMsgModalShow(true);

const handleClose = () => setShow(false);
const handleLoginClose = () => setLoginShow(false);
const handleMsgModalClose = () => setMsgModalShow(false);


    console.log(contextMsg);
  return (
    <BrowserRouter>
      <div className="App">
        {isAdmin ? (
          <NavAdmin
           
            handleClose={handleClose}
            handleShow={handleShow}
            handleLoginClose={handleLoginClose}
            handleLoginShow={handleLoginShow}
          />
        ) : (
          <Nav
            handleClose={handleClose}
            handleShow={handleShow}
            handleLoginClose={handleLoginClose}
            handleLoginShow={handleLoginShow}
          />
        )}

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/CodeStackPage" element={<CodeStackPage />} />
          <Route path="/ExperiencePage" element={<ExperiencePage />} />
          <Route path="/CVPage" element={<CVPage />} />
          <Route path="/EditUserInfoPage" element={<EditPage />} />
        </Routes>
        <CreateProfileModal
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
        <LoginModal
          loginShow={loginShow}
          handleLoginClose={handleLoginClose}
          handleLoginShow={handleLoginShow}
        />
        <SendMsgModal
          msgModalShow={msgModalShow}
          handleMsgModalShow={handleMsgModalShow}
          handleMsgModalClose={handleMsgModalClose}
        />
        <MsgButton variant="success" 
        handleMsgModalShow={handleMsgModalShow}>
         
        </MsgButton>
        {contextMsg === "" ? null : (
          <Alert
            style={{
              left: "50%",
              top: "50px",
              transform: "translate(-50%)",
              width: "80%",
            }}
            variant="success"
          >
            <Alert.Heading>{contextMsg}</Alert.Heading>
          </Alert>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
