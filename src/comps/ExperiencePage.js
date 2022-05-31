import React, {useState, useReducer} from 'react'
import {Form} from "react-bootstrap"
import Header from "./sections/Header";

import ListExpCard from "./compFeatures/ListExpCard"
function ExperiencePage() {
  return (
    <div> 
    <Header/>
    <ListExpCard></ListExpCard>  

    
    </div>


  )
}

export default ExperiencePage