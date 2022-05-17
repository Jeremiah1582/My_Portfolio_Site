import React, {useContext} from 'react'
import {UserContext} from "../../context/userContext"
import {Card, Button, Figure} from "react-bootstrap"

function ListExpCard() {
    const user = useContext(UserContext)
   const {workExperience} = user.user;
  return (
    <div className="flexContainer" >
{workExperience.map(data=>{
       return (
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
             <h7>{data.position}</h7>
             <Card.Text>{data.responsibilities}</Card.Text>
             <Card.Link onClick>more...</Card.Link>
           </Card.Body>
         </Card>
       );
}

)}

    </div>
  )
}

export default ListExpCard