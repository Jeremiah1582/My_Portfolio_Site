
import React,{useState  } from "react";
import Nav from "./comps/compFeatures/Nav";
import ProfilePage from "./comps/ProfilePage";
import CodeStackPage from "./comps/CodeStackPage";
import ExperiencePage from "./comps/ExperiencePage";
import CVPage from "./comps/CVPage";
import CreateProfileModal from "./comps/compFeatures/CreateProfileModal";
import EditPage from "./comps/EditPage";
import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)
  console.log('clcked handle show')};

  return (
  <BrowserRouter>
    <div className="App">
      <Nav handleClose={handleClose} handleShow={handleShow}/>

<Routes>
  <Route exact path="/" element={<ProfilePage/> } />
  <Route  path="/CodeStackPage" element={<CodeStackPage/> } />
  <Route  path="/ExperiencePage" element={<ExperiencePage/> } />
  <Route  path="/CVPage" element={<CVPage/> } />
  <Route  path="/EditPage" element={<EditPage/> } />
  
</Routes>
<CreateProfileModal show={show} handleClose={handleClose} handleShow={handleShow} />
  
      
    


    </div>  
</BrowserRouter>
  );
}

export default App;
