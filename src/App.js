
import React,{useState  } from "react";
import Nav from "./comps/compFeatures/Nav";
import ProfilePage from "./comps/ProfilePage";
import CodeStackPage from "./comps/CodeStackPage";
import ExperiencePage from "./comps/ExperiencePage";
import CVPage from "./comps/CVPage";
import CreateProfileModal from "./comps/compFeatures/CreateProfileModal";
import CMSPage from "./comps/CMS";
import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
const [showModal, setShowModal] = useState(false)
  return (
  <BrowserRouter>
    <div className="App">
      <Nav/>

<Routes>
  <Route exact path="/" element={<ProfilePage/> } />
  <Route  path="/CodeStackPage" element={<CodeStackPage/> } />
  <Route  path="/ExperiencePage" element={<ExperiencePage/> } />
  <Route  path="/CVPage" element={<CVPage/> } />
  <Route  path="/CMSPage" element={<CMSPage/> } />
  
</Routes>
<CreateProfileModal />
  
      
    


    </div>  
</BrowserRouter>
  );
}

export default App;
