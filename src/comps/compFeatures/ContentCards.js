
import React, { useContext, useState, useEffect } from "react";
import {  Card, ListGroup, ListGroupItem } from "react-bootstrap";


function ContentCard({item}) {
  return (
    <div className="myCard">
      <Card.Img className="icon" variant="top" src={item.icon}></Card.Img>
      {/* slide effect */}
      <Card.Body className="slide slide2">
        <div className="content">
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.info.slice(0, 40).concat("...")}</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{item.type}</ListGroupItem>

            {item.paradigm ? (
              <ListGroupItem>Paradigms: {item.paradigm}</ListGroupItem>
            ) : null}
            {item.writtenIn ? (
              <ListGroupItem>WrittenIn: {item.writtenIn}</ListGroupItem>
            ) : null}
          </ListGroup>

          <Card.Link href={item.documentation}>Documentation</Card.Link>
          <br />
          <i class="fa fa-user-circle" aria-hidden="true"></i>
        </div>
      </Card.Body>
    </div>
  );
}

export default ContentCard