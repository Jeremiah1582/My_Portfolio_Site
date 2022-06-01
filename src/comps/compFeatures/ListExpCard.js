import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Card, Button, Figure, Alert } from "react-bootstrap";
import axios from "axios";
import RemoveExpButton from "./RemoveExpButton"
import LrgWrkExpModal from "./LrgWrkExpModal"
import EditWrkExp from "./EditWrkExp"

function ListExpCard() {
  const user = useContext(UserContext);
  const { workExperience } = user.user;
  const [workExp, setWorkExp] = useState(workExperience);
  const [msg, setMsg] = useState("");

const userId = user.user._id


const handleRemoveExp = (data) => {
const itemId = data._id;
  axios
    .post("http://localhost:5001/admin/removeWorkExp", { itemId, userId })
    .then((result) => {
      console.log("addWorkExp result from Bck=", result);
       setMsg(result.data.msg);
    });
};
  return (
    <div  >
    {msg!==''? <Alert variant='success'> {msg}</Alert>:''} 
    <div className="flexContainer">

      {workExperience.map((data) => {
          console.log(data._id)

          {if(data._id){
        return (
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
                <Card.Title href="#">{data.companyName.toUpperCase()}</Card.Title>
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
                  <EditWrkExp data={data}>Edit</EditWrkExp>
                </div>
              </Card.Body>
              <Button onClick={(e) => handleRemoveExp(data)}>Remove</Button>
            </Card>
          </div>
        );
      }else{
        <h1>no work experience listed </h1>
      }
        }}
      )}
    </div>
    </div>
  );
}

export default ListExpCard;
