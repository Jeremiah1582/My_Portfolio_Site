

import Nav from "./comps/compFeatures/Nav";
import ProfilePage from "./comps/ProfilePage";
import CodeStackPage from "./comps/CodeStackPage";
import ExperiencePage from "./comps/ExperiencePage";
import CVPage from "./comps/CVPage";
import CMSPage from "./comps/CMS";
import {BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
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
      
    


    </div>  
</BrowserRouter>
  );
}

export default App;
