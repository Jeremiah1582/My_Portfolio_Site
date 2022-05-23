import React, {useState, useReducer} from 'react'
import {Form} from "react-bootstrap"

import ExperienceModal from "./compFeatures/AddExperienceModal"
import ListExpCard from "./compFeatures/ListExpCard"
function ExperiencePage() {
  return (
    <div> 
    <ExperienceModal/>
    <ListExpCard></ListExpCard>
    </div>


  )
}

export default ExperiencePage