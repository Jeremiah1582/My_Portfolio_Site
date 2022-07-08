import React, {useContext, useState, useEffect}from 'react'
import {codingLanguages} from "../context/datasets/codeStackDataset"
import {Figure, Image, Card, ListGroup,ListGroupItem }from "react-bootstrap"
function CodeStackPage() {
  console.log(codingLanguages);
  return (
    <div className="flexContainer" >
      
        {codingLanguages.map((item) => {
          return (
            <div style={{ padding: "10px" }}>
              <Card style={{ width: "20rem", padding: "5px" }}>
                <Card.Img variant="top" src={item.icon}></Card.Img>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.info.slice(0, 40).concat("...")}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{item.type}</ListGroupItem>

                  {item.paradigm ? (
                    <ListGroupItem>Paradigms: {item.paradigm}</ListGroupItem>
                  ) : null}
                  {item.writtenIn ? (
                    <ListGroupItem>WrittenIn: {item.writtenIn}</ListGroupItem>
                  ) : null}
                </ListGroup>
                <Card.Body>
                  <Card.Link href={item.documentation}>Documentation</Card.Link>
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </div>
          );
        })}
    
    
    </div>
  );
}

export default CodeStackPage