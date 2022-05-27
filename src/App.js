
import React,{useState  } from "react";
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



function App() {
const [show, setShow] = useState(false);
const [loginShow, setLoginShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleLoginClose = () => setLoginShow(false);
  const handleShow = () => setShow(true);
  const handleLoginShow = () => setLoginShow(true);

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
          <Route path="/user/ProfilePage" element={<ProfilePage />} />
          <Route path="/user/CodeStackPage" element={<CodeStackPage />} />
          <Route path="/user/ExperiencePage" element={<ExperiencePage />} />
          <Route path="/user/CVPage" element={<CVPage />} />
          <Route path="/user/editUserInfo" element={<EditPage />} />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
