import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Card, Button, Figure } from "react-bootstrap";
import axios from "axios";
import RemoveExpButton from "./RemoveExpButton"

function ListExpCard() {
  const user = useContext(UserContext);
  const { workExperience } = user.user;
  const [workExp, setWorkExp] = useState({});
  const [msg, setMsg] = useState("");

const userId = user.user._id


const handleRemoveExp = (data) => {
console.log(data);
const itemId = data._id;

  axios
    .post("http://localhost:5001/user/removeWorkExp", { itemId, userId })
    .then((result) => {
      console.log("addWorkExp result from Bck=", result);
      //  setMsg(result.msg);
        
    });
  
  
};

  return (
    <div  className="flexContainer">
      {workExperience.map((data) => {
          
     console.log(data._id)
        return (
          <div key={data._id}>
            <Card className="section" style={{ width: "18rem" }}>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="holder.js/171x180"
                />
              </Figure>
              <Card.Body>
                <Card.Title href="#">{data.companyName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  start date: {data.startDate} <br />
                  end date: {data.endDate}
                </Card.Subtitle>
                {data.position}
                <Card.Text>{data.responsibilities}</Card.Text>
                <Card.Link>more...</Card.Link>
              </Card.Body>
              <Button onClick={handleRemoveExp(data)}>Remove</Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default ListExpCard;
