import React, {useContext, useState, useEffect}from 'react'
import {codingLanguages} from "../context/datasets/codeStackDataset"
import {Figure, Image, Card, ListGroup,ListGroupItem }from "react-bootstrap"
import ContentCards from "../comps/compFeatures/ContentCards"
function CodeStackPage() {

  return (
    <div className="flexContainer" >
      
        {codingLanguages.map((item) => {
          return (
          <ContentCards item={item}/>)
        })}
    
    
    </div>
  );
}

export default CodeStackPage