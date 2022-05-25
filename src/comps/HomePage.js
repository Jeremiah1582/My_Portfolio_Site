import React, {useContext} from 'react'
import Header from './sections/Header'
import Footer from "./sections/Footer"

import {UserContext} from "../context/userContext"

function HomePage() {
    const user = useContext(UserContext)
  return (
    <div>
      <Header page="HomePage">
        
      
      </Header>
      <Footer ></Footer>
    </div>
  );
}

export default HomePage