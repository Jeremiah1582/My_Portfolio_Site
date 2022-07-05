import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Card, Button, Figure, Alert } from "react-bootstrap";
import axios from "axios";
import RemoveExpButton from "./RemoveExpButton"
import LrgWrkExpModal from "./LrgWrkExpModal"
import EditWrkExp from "./EditWrkExp"

function ListExpCard() {
  const {user, isAdmin} = useContext(UserContext);
  
  const  {workExperience}  = user;
  console.log(workExperience);
  const [msg, setMsg] = useState("");

const userId = user._id


const handleRemoveExp = (data) => {
const itemId = data._id;
  axios
    .post("http://localhost:5001/admin/removeWorkExp", { itemId, userId },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("currentToken"),
            },
          }
          )
    .then((result) => {
      console.log("addWorkExp result from Bck=", result);
       setMsg(result.data.msg);
    });
};
  return (
    <div  >
    exp
    {msg!==''? <Alert variant='success'> {msg}</Alert>:''} 
    <div className="flexContainer">

      {workExperience.map((data) => {
          console.log(data)
return ( data._id? (
          <div key={data._id} id={data._id}>
            <Card className="section" style={{ width: "18rem" }}>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={data.imageLink}
                />
              </Figure>
              <Card.Body>
                <Card.Title href="#">
                  {data.companyName.toUpperCase()}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  start date: {data.startDate} <br />
                  end date: {data.endDate}
                </Card.Subtitle>
                {data.position}
                <Card.Text>
                  {data.responsibilities.slice(0, 75).concat("...")}
                </Card.Text>

                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <LrgWrkExpModal data={data}>more...</LrgWrkExpModal>
                  {isAdmin===true? (<EditWrkExp data={data}>Edit</EditWrkExp>):null}
                  
                </div>
              </Card.Body>
              {isAdmin === true ? (
                <Button onClick={(e) => handleRemoveExp(data)}>Remove</Button>
              ) : null}
            </Card>
          </div>
        ):(<h1>no work experience listed </h1>)
        
      
        )
         }
      )}
    </div>
    </div>
  );
}

export default ListExpCard;
