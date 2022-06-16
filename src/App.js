
import React,{useState, useContext, useEffect  } from "react";
import Nav from "./comps/compFeatures/Nav";
import HomePage from "./comps/HomePage";
import ProfilePage from "./comps/ProfilePage";
import CodeStackPage from "./comps/CodeStackPage";
import ExperiencePage from "./comps/ExperiencePage";
import CVPage from "./comps/CVPage";
import CreateProfileModal from "./comps/compFeatures/CreateProfileModal";
import LoginModal from "./comps/compFeatures/LoginModal"
import EditPage from "./comps/EditPage";
import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Alert,Modal} from "react-bootstrap"
import {UserContext}from "./context/userContext"



function App() {
// const {getUser} =useContext(UserContext)
const {contextMsg, isVerified} = useContext(UserContext)
const [show, setShow] = useState(false);
const [loginShow, setLoginShow] = useState(false);
const handleClose = () => setShow(false);
const handleLoginClose = () => setLoginShow(false);
const handleShow = () => setShow(true);
const handleLoginShow = () => setLoginShow(true);

// useEffect(() => {
//  getUser()
// }, [])

  // window.onscroll= function(){
  //   stickyNavFunction()
  // }
  // let sticky= Nav.offsetTop
  // function stickyNavFunction (){
  //   if (window.pageYOffset>=sticky) {
  //     Nav.classList.add("sticky")     
  //   }else{
  //     Nav.classList.remove("sticky")
  //   }
  // }
    console.log(contextMsg);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav
          handleClose={handleClose}
          handleShow={handleShow}
          handleLoginClose={handleLoginClose}
          handleLoginShow={handleLoginShow}
        />

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

        {
          contextMsg == undefined? "": (
          <Alert style={{
            left:"50%",
            top:"50px",
            transform:"translate(-50%)",
            width:"80%"}} variant="success">
  <Alert.Heading>{contextMsg}</Alert.Heading>
</Alert>
        )}
       
      </div>
    </BrowserRouter>
  );
}

export default App;
