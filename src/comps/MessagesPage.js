import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { Card, Button, Figure, Alert } from "react-bootstrap";

function MessagesPage() {
  const { user, isVerified, isAdmin } = useContext(UserContext);
  const inBox = user.messagesReceived;
  console.log(inBox);
  return (
    <div>
      
      {/* {msg !== "" ? <Alert variant="success"> {msg}</Alert> : ""} */}
      <div className="flexContainer">
        {inBox.map((data) => {
          console.log(data);
          return data._id ? (
            <div key={data._id} id={data._id}>
              <Card className="section" style={{ width: "18rem" }}>
               
                <Card.Body>
                  <Card.Title href="#">
                    you received a message from {data.company.toUpperCase()}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                   received: {data.dateReceived}
                   from {data.author} <br />
                    
                  </Card.Subtitle>
                  {data.position}
                  <Card.Text>
                    {data.message.slice(0, 75).concat("...")}
                  </Card.Text>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {/* <LrgWrkExpModal data={data}>more...</LrgWrkExpModal> */}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <h1>no work experience listed </h1>
          );
        })}
      </div>
    </div>
  );
}

export default MessagesPage;
