import React, {useState, useReducer} from 'react'
import {Form} from "react-bootstrap"

import ExperienceModal from "./compFeatures/AddExperienceModal"
import ListExpCard from "./compFeatures/ListExpCard"
function ExperiencePage() {
  return (
    <div> 
  
    <ListExpCard></ListExpCard>  
      
    <ExperienceModal/>
    </div>


  )
}

export default ExperiencePage